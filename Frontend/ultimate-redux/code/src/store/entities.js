import { combineReducers } from 'redux'
import bugsReducers from './bugs' ;
import projectReducers from './projects';
import userReducers from './users';

export default combineReducers({
  bugs: bugsReducers,
  projects: projectReducers,
  users: userReducers,
})