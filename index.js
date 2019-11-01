


function setTime() {
    let now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    let secondsToDegree = (seconds * 360) / 60 + 90;
    let minutesToDegree = (minutes * 360) / 60 + 90;
    let hoursToDegree = (hours * 360) / 12 + 90;


    const minuteHand = document.querySelector('.minutes-hand');
    const hourHand = document.querySelector('.hours-hand');
    const secondHand = document.querySelector('.seconds-hand');

    minuteHand.style.transform = `rotate(${minutesToDegree}deg)`;
    secondHand.style.transform = `rotate(${secondsToDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursToDegree}deg)`;
}

setInterval(() => { setTime() }, 1000)

