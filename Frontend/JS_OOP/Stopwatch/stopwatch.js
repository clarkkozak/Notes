function Stopwatch() {
  let active = false;
  let start;
  let end;
  let duration = 0;

  this.start = () => {
    if (active) {
      throw new Error('Already Active')
    }

    active = true

    start = Date.now()
  }

  this.stop = () => {
    if (!active) {
      throw new Error('Cannot stop if not active')
    }

    active = false

    end = Date.now()

    seconds = (end - start) / 1000
    duration += seconds
  }

  this.reset = () => {
    start = null
    end = null
    active = false
    duration = 0
  }

  Object.defineProperty(this, 'duration', {
    get: () => {
      if (active) {
        return duration + (Date.now() - start) / 1000;
      }

      return duration
    }
  })
}

let sw = new Stopwatch()