const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutsElement = document.querySelector('.minuts');
const secondsElement = document.querySelector('.seconds');
const newYear = '1 1 2022'
function getDate() {
    const nweYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalseconds = Math.floor(nweYearDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24) - 1;
    const hours = Math.floor((totalseconds / 3600) % 24);
    const minuts = Math.floor((totalseconds / 60) % 60);
    const seconds = Math.floor((totalseconds % 60));

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutsElement.innerHTML = formatTime(minuts);
    secondsElement.innerHTML = formatTime(seconds);
};

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
};

setInterval(getDate, 1000)