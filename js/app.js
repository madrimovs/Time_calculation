const walking = document.querySelector(".walk"),
  byBice = document.querySelector(".bice"),
  byCar = document.querySelector(".car"),
  byPlane = document.querySelector(".plane"),
  elInput = document.querySelector(".input"),
  elForm = document.querySelector(".form");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const person = Number(elInput.value);
  elInput.value = "";
  if (!isNaN(person)) {
    const walk = 3.6,
      bice = 20.1,
      car = 70,
      plane = 800;
    //walk
    const walkHour = Math.floor(person / walk),
      walkMinute = Math.floor((person / walk - walkHour) * 60),
      walkSec = Math.floor(((person / walk - walkHour) * 60 - walkMinute) * 60);
    //bice
    const biceHour = Math.floor(person / bice),
      biceMinute = Math.floor((person / bice - biceHour) * 60),
      biceSec = Math.floor(((person / bice - biceHour) * 60 - biceMinute) * 60);
    //car
    const carHour = Math.floor(person / car),
      carMinute = Math.floor((person / car - carHour) * 60),
      carSec = Math.floor(((person / car - carHour) * 60 - carMinute) * 60);
    //plane
    const planeHour = Math.floor(person / plane),
      planeMinute = Math.floor((person / plane - planeHour) * 60),
      planeSec = Math.floor(
        ((person / plane - planeHour) * 60 - planeMinute) * 60
      );
    //result
    walking.textContent = `${walkHour} soat ${walkMinute} minut ${walkSec} sekund`;
    byBice.textContent = `${biceHour} soat ${biceMinute} minut ${biceSec} sekund`;
    byCar.textContent = `${carHour} soat ${carMinute} minut ${carSec} sekund`;
    byPlane.textContent = `${planeHour} soat ${planeMinute} minut ${planeSec} sekund`;
  }
});
