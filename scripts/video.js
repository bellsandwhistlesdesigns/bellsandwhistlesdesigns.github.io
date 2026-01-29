console.log("video.js is working");

const video = document.querySelector(".hero-video");

if (video) {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  });
}