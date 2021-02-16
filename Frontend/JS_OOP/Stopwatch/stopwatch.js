function Stopwatch() {
  this.active = false;
  this.startTime;
  this.endTime;
  this.duration = 0;
}

Stopwatch.prototype.start = function() {
  if (this.active) {
    throw new Error('Already Active')
  }

  this.active = true

  this.startTime = Date.now()
}

Stopwatch.prototype.stop = function() {
  if (!this.active) {
    throw new Error('Cannot stop if not active')
  }

  this.active = false

  this.endTime = Date.now()

  seconds = (this.endTime - this.startTime) / 1000
  this.duration += seconds
}

Stopwatch.prototype.reset = function() {
  this.startTime = null
  this.endTime = null
  this.active = false
  this.duration = 0
}

let sw = new Stopwatch()

