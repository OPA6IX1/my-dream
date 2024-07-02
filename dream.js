const currentTimeElement = document.getElementById('currentTime');
const currentDayElement = document.getElementById('currentDay');

function updateCurrentTime() {
    const currentTime = new Date().toUTCString();
    currentTimeElement.textContent = currentTime;
}

function updateCurrentDay() {
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    currentDayElement.textContent = currentDay;
}

updateCurrentTime();
updateCurrentDay();

setInterval(updateCurrentTime, 1000);