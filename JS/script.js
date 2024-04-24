const hourEl = document.querySelector(".hour")
const miniteEl = document.querySelector(".minite")
const secondEl = document.querySelector(".second")

function updateClock(){

    const currentTime = new Date()
    const currentHours = currentTime.getHours()
    const currentMinutes = currentTime.getMinutes()
    const currentSeconds = currentTime.getSeconds()

    const hourDeg = (currentHours / 12) * 360;
    const minutesDeg = (currentMinutes / 60) * 360;
    const secondDeg = (currentSeconds / 60) * 360;

    hourEl.style.transform = `rotate(${hourDeg}deg)` 
    miniteEl.style.transform = `rotate(${minutesDeg}deg)` 
    secondEl.style.transform = `rotate(${secondDeg}deg)` 

    setTimeout(updateClock,1000)
}

updateClock()