let timer;
let timeLeft = 1500;
let isRunning = false;

const display = document.querySelector('.display');
const startBtn = document.getElementById('startBtn');
const modeButtons = document.querySelectorAll('.mode-btn');

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + displaySeconds;
}

function startTimer() {
    if (isRunning) {
        clearInterval(timer);
        startBtn.textContent = "START";
    } else {
        timer = setInterval(function() {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Time is up!");
            }
        }, 1000);
        startBtn.textContent = "PAUSE";
    }
    isRunning = !isRunning;
}

modeButtons.forEach(function(button) {
    button.onclick = function() {
        modeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = "START";
        
        timeLeft = parseInt(button.getAttribute('data-time'));
        updateDisplay();
    };
});

startBtn.onclick = startTimer;