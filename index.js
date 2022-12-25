let video1 = document.getElementById("video1");
let video2 = document.getElementById("video2");
let video3 = document.getElementById("video3");

window.onload = function () {
  video1.addEventListener("ended", function () {
    playVideo(video1, video2);
  });
  video2.addEventListener("ended", function () {
    playVideo(video2, video3);
  });
  video3.addEventListener("ended", function () {
    playVideo(video3, video1);
  });
};

function playVideo(oldVideoID, newVideoID) {
  oldVideoID.setAttribute("data-visible", "false");
  newVideoID.setAttribute("data-visible", "true");
  newVideoID.play();
}
