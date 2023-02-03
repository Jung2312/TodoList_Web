const playBtn = document.getElementById("play");
const musicbox = document.getElementById("musicbox");
const audio = document.getElementById("audio");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const imgCover = document.getElementById("cover");
const title = document.getElementById("title");

const songs = [
  "Siestita",
  "Orbiting-Knowhere",
  "Little-Fish",
  "Joy-To-The-World",
];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `../music/${song}.mp3`;
  imgCover.src = `../img/${song}.png`;
}

function playMusic() {
  musicbox.classList.add("play");

  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;

  audio.play();
}

function pauseMusic() {
  musicbox.classList.remove("play");
  playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;

  audio.pause();
}

function playPrevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playMusic();
}

function playNextSong() {
  songIndex++;

  if (songIndex > 3) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playMusic();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;

  const progressPer = (currentTime / duration) * 100;

  progress.style.width = `${progressPer}%`;
}

function changeProgress(e) {
  const width = e.target.clientWidth; // 전체 넓이

  const offsetX = e.offsetX; // 현재 x 좌표;

  const duration = audio.duration; // 재생길이

  audio.currentTime = (offsetX / width) * duration;
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicbox.classList.contains("play");

  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

prevBtn.addEventListener("click", playPrevSong);
nextBtn.addEventListener("click", playNextSong);
audio.addEventListener("ended", playNextSong);
audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", changeProgress);
