// Your Object should always be in a reliable state!
// Premature optimization is the root of all evils

function Stopwatch() {
  let startTime, endTime, active, duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function() { return duration },
    set: function(value) { duration = value }
  })

  Object.defineProperty(this, 'active', {
    get: function() { return active },
    set: function(value) { active = value },
  })

  Object.defineProperty(this, 'startTime', {
    get: function() { return startTime },
    set: function(value) { startTime = value }
  })

  Object.defineProperty(this, 'endTime', {
    get: function() { return endTime },
    set: function(value) { endTime = value }
  })
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
