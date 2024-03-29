<script>
  // These values are bound to properties of the video
  let time = 0;
  let duration;
  let paused = true;
  let muted = false;

  let showControls = true;
  let showControlsTimeout;
  
  // What parent doesn't want a mute button?
  function toggleMute(e) {
    muted = !muted;
  }

  function handleMousemove(e) {
    // Make the controls visible, but fade out after
    // 2.5 seconds of inactivity
    clearTimeout(showControlsTimeout);
    showControlsTimeout = setTimeout(() => (showControls = false), 2500);
    showControls = true;

    if (!(e.buttons & 1)) return; // mouse not down
    if (!duration) return; // video not loaded yet

    const { left, right } = this.getBoundingClientRect();
    time = (duration * (e.clientX - left)) / (right - left);
  }

  function handleMousedown(e) {
    // we can't rely on the built-in click event, because it fires
    // after a drag — we have to listen for clicks ourselves

    function handleMouseup() {
      if (paused) e.target.play();
      else e.target.pause();
      cancel();
    }

    function cancel() {
      e.target.removeEventListener("mouseup", handleMouseup);
    }

    e.target.addEventListener("mouseup", handleMouseup);

    setTimeout(cancel, 200);
  }

  function format(seconds) {
    if (isNaN(seconds)) return "...";

    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;

    return `${minutes}:${seconds}`;
  }

  $: if (!paused) {
    alert("video playing");
  }
</script>

<h1>Caminandes: Llamigos</h1>
<p>
  From <a href="https://cloud.blender.org/open-projects"
    >Blender Open Projects</a
  >. CC-BY
</p>

<div class="width">
  <video
    poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
    src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    on:mousemove={handleMousemove}
    on:mousedown={handleMousedown}
    bind:currentTime={time}
    bind:duration
    bind:paused
    bind:muted={muted}
  >
    <track kind="captions" />
  </video>

  <button on:click={toggleMute}>{muted ? 'Unmute' : 'Mute'}</button>

  <div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
    <progress value={time / duration || 0} />

    <div class="info">
      <span class="time">{format(time)}</span>
      <span>click anywhere to {paused ? "play" : "pause"} / drag to seek</span>
      <span class="time">{format(duration)}</span>
    </div>
  </div>
</div>


<style>
  div {
    position: relative;
  }

  .controls {
    position: absolute;
    top: 0;
    width: 100%;
    transition: opacity 1s;
  }

  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  span {
    padding: 0.2em 0.5em;
    color: white;
    text-shadow: 0 0 8px black;
    font-size: 1.4em;
    opacity: 0.7;
  }

  .time {
    width: 3em;
  }

  .time:last-child {
    text-align: right;
  }

  progress {
    display: block;
    width: 100%;
    height: 10px;
    -webkit-appearance: none;
    appearance: none;
  }

  progress::-webkit-progress-bar {
    background-color: rgba(0, 0, 0, 0.2);
  }

  progress::-webkit-progress-value {
    background-color: rgba(255, 255, 255, 0.6);
  }

  video {
    width: 100%;
  }
  
  .width {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
