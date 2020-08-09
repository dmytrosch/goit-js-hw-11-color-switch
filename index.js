const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
];
const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};
let intervalId = null;
const intervalTime = 1000;

refs.stopBtn.disabled = true;
refs.startBtn.addEventListener("click", startColorSwitchings);

function startColorSwitchings() {
    intervalId = setInterval(switchBodyColor, intervalTime, colors);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    refs.stopBtn.addEventListener("click", stopColorSwitchings);
    refs.startBtn.removeEventListener("click", startColorSwitchings);
}

function switchBodyColor(colorsArr) {
    const index = randomIntegerFromInterval(0, colorsArr.length - 1);
    const color = colorsArr[index];
    document.body.style.backgroundColor = color;
}

function stopColorSwitchings() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    refs.stopBtn.removeEventListener("click", stopColorSwitchings);
    refs.startBtn.addEventListener("click", startColorSwitchings);
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
