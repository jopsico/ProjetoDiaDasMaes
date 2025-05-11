const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const finalMessage = document.getElementById('finalMessage');
const finalImage = document.getElementById('finalImage');
const music = document.getElementById('music');
const playPauseBtn = document.getElementById('playPause');
const volumeSlider = document.getElementById('volume');
const audioControls = document.getElementById('audioControls');

yesBtn.addEventListener('click', () => {
  finalMessage.style.display = 'block';
  finalImage.classList.add('fade-zoom');
  music.play();
  audioControls.style.display = 'block';
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

playPauseBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    music.pause();
    playPauseBtn.textContent = '▶️';
  }
});

volumeSlider.addEventListener('input', () => {
  music.volume = volumeSlider.value;
});
