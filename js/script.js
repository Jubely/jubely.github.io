
const canvas = document.getElementById("canvas");
const canvasCtx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

const audio = new Audio();
const start = document.getElementById("start");

start.addEventListener("click", () => {
  if (!audio.paused) {
    return;
  }

  start.classList.add("playing");
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioCtx.createAnalyser();

  audio.src =
    "./music_files/蛙池 - 孔雀.mp3";
  audio.crossOrigin = "anonymous";

  const source = audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const draw = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    analyser.getByteTimeDomainData(dataArray);
    const lines = bufferLength / 2;

    for (var i = 0; i < lines; i++) {
      const height = dataArray[i] / 6.5;
      const radius = 40;
      const rads = Math.PI * 2 / lines;
      const x1 = centerX + radius * Math.cos(rads * i);
      const y1 = centerY + radius * Math.sin(rads * i);
      const x2 = centerX + (radius + height) * Math.cos(rads * i);
      const y2 = centerY + (radius + height) * Math.sin(rads * i);

      canvasCtx.moveTo(x1, y1);
      canvasCtx.lineTo(x2, y2);
    }

    canvasCtx.strokeStyle = "#feab12";
    canvasCtx.stroke();
    requestAnimationFrame(draw);
  };
  close;

  audio.play();
  draw();
});

audio.addEventListener("ended", () => {
  start.classList.remove("playing");
});