const startBtn = document.getElementById("startBreak");
const stopBtn = document.getElementById("stopBreak");
const breakSection = document.getElementById("break");
const homeSection = document.getElementById("home");
const timerNumber = document.getElementById("timerNumber");
const breathText = document.getElementById("breathText");

let timer;
let count = 5;

startBtn.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    breakSection.classList.remove("hidden");
    startTimer();
});

stopBtn.addEventListener("click", () => {
    resetBreak();
});

function startTimer() {
    count = 5;
    timerNumber.textContent = count;

    timer = setInterval(() => {
        count--;
        timerNumber.textContent = count;

        if (count === 3) breathText.textContent = "Espira…";
        if (count === 1) breathText.textContent = "Rilassati…";

        if (count === 0) {
            clearInterval(timer);
            breathText.textContent = "Pausa completata!";
        }
    }, 1000);
}

function resetBreak() {
    clearInterval(timer);
    breakSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
    breathText.textContent = "Inspira…";
}
