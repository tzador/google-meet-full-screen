(() => {
  const button = document.createElement("button");
  button.innerText = "Full Screen";
  button.style.zIndex = 1000000;
  button.style.position = "fixed";
  button.style.bottom = "10px";
  button.style.left = "10px";
  document.body.append(button);
  button.addEventListener("click", () => {
    [...document.querySelectorAll("video")]
      .map((video) => ({
        video,
        pixels: video.offsetWidth * video.offsetHeight,
      }))
      .sort((a, b) => b.pixels - a.pixels)[0]
      .video.requestFullscreen();
  });
})();
