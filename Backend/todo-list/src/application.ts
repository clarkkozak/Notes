import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {RestExplorerComponent} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import morgan from 'morgan';
import path from 'path';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class TodoListApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    this.setupLogging();
  }

  private setupLogging() {
    // Register `morgan` express middleware
    // Create a middleware factory wrapper for `morgan(format, options)`
    const morganFactory = (config?: morgan.Options) => {
      this.debug('Morgan configuration', config);
      return morgan('combined', config);
    };

    // Print out logs using `debug`
    const defaultConfig: morgan.Options = {
      stream: {
        write: (str: string) => {
          this._debug(str);
        },
      },
    };
    this.expressMiddleware(morganFactory, defaultConfig, {
      injectConfiguration: 'watch',
      key: 'middleware.morgan',
    });
  }
}
