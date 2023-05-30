const secondElement = document.querySelector(".seconds");
const minutesElement = document.querySelector(".minutes");
const hoursElement = document.querySelector(".hours");
const dayElement = document.querySelector(".days");

const targetTime = new Date("2024-05-30 09:15:40").getTime();

const timeInterval = setInterval(() =>interval(), 1000);

const interval = () => {
  const currentTime = new Date().getTime();
  const timeRemaining = targetTime - currentTime;

  // Calculate the days, hours, minutes, and seconds

  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  if (days <= 9) {
    days = "0" + days;
  }
  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  if(timeRemaining < 0){
    clearInterval(timeInterval);
    document.getElementById("timer").innerHTML = "Countdown finished!";
    dayElement.innerText = "00";
    hoursElement.innerText = "00";
    minutesElement.innerText = "00";
    secondElement.innerText = "00";
  }else{
    dayElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondElement.innerText = seconds;
  }
  
};
interval();
