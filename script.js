function startBreak() {
  document.getElementById("breathing").classList.remove("hidden");
  document.querySelector(".btn").classList.add("hidden");

  let count = localStorage.getItem("pauseCount") || 0;
  count++;
  localStorage.setItem("pauseCount", count);
  updateCounter();

  startBreathingCycle();
}

function stopBreak() {
  document.getElementById("breathing").classList.add("hidden");
  document.querySelector(".btn").classList.remove("hidden");
}

function updateCounter() {
  let count = localStorage.getItem("pauseCount") || 0;
  document.getElementById("counter").innerText =
    "Pause fatte oggi: " + count;
}

function startBreathingCycle() {
  const text = document.getElementById("breathText");
  let phase = 0;

  setInterval(() => {
    phase = (phase + 1) % 2;
    text.innerText = phase === 0 ? "Inspira…" : "Espira…";
  }, 3000);
}

window.onload = updateCounter;
