function Stopwatch() {
  let active = false;
  let start = 0;
  let duration = 0;

  this.start = () => {
    if (active) {
      throw new Error('Already Active')
    } else {
      start = Date.now()
      active = true;
    }
  }

  this.stop = () => {
    if (!active) {
      throw new Error('Cannot stop if not active')
    } else {
      duration = (Date.now() - start) / 1000;
      active = false;
    }
  }

  this.reset = () => {
    if (active) {
      throw new Error('Unable to reset while active')
    }

    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: () => {
      if (active) {
        return (Date.now() - start) / 1000;
      } else {
        return duration;
      }
    }
  })
}

let sw = new Stopwatch();