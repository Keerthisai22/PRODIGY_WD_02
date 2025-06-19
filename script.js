let s = 0, m = 0, h = 0, timer;

function update() {
  s++;
  if (s == 60) { s = 0; m++; }
  if (m == 60) { m = 0; h++; }
  document.getElementById("display").textContent =
    [h, m, s].map(v => String(v).padStart(2, '0')).join(":");
}

document.getElementById("start").onclick = () => {
  if (!timer) timer = setInterval(update, 1000);
};

document.getElementById("pause").onclick = () => {
  clearInterval(timer);
  timer = null;
};

document.getElementById("reset").onclick = () => {
  clearInterval(timer);
  timer = null;
  s = m = h = 0;
  document.getElementById("display").textContent = "00:00:00";
};