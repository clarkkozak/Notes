<script>
  let w;
  let h;
  let size = 42;
  let text = "edit me";
</script>

<div class="center">
  <input type="range" bind:value={size} />
  <input bind:value={text} />
  
  <p>size: {w}px x {h}px</p>
  
  <div bind:clientWidth={w} bind:clientHeight={h}>
    <span style="font-size: {size}px">{text}</span>
  </div>
</div>

<style>
  .center {
    margin: auto;
  }
  input {
    display: block;
  }
  div {
    display: inline-block;
  }
  span {
    word-break: break-all;
  }
</style>
