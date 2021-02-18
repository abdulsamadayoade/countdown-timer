const newYear = '1 Jan 2022';
const daysCount = document.getElementById('days');
const hoursCount = document.getElementById('hours');
const minutesCount = document.getElementById('minutes');
const secondsCount = document.getElementById('seconds');

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysCount.innerHTML = days;
    hoursCount.innerHTML = formatTime(hours);
    minutesCount.innerHTML = formatTime(minutes);
    secondsCount.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);