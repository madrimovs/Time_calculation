let walk = +prompt("Masofani kiriting", "");

if (!isNaN(walk) && walk != 0) {
  const walking = document.querySelector(".card-walk"),
    byBice = document.querySelector(".card-bice"),
    byCar = document.querySelector(".card-car"),
    byPlane = document.querySelector(".card-plane");
  const person = 3.6,
    bice = 20.1,
    car = 70,
    plane = 800;
  //walk
  let Hour = Math.floor(walk / person),
    Minute = Math.floor((walk / person - Hour) * 60),
    Secund = Math.floor(((walk / person - Hour) * 60 - Minute) * 60);
  walking.textContent = `${Hour} soat ${Minute} minut ${Secund} sekund`;
  //bice
  let biceHour = Math.floor(walk / bice),
    biceMinute = Math.floor((walk / bice - biceHour) * 60),
    biceSecund = Math.floor(((walk / bice - biceHour) * 60 - biceMinute) * 60);
  byBice.textContent = `${biceHour} soat ${biceMinute} minut ${biceSecund} sekund`;
  //car
  let carHour = Math.floor(walk / car),
    carMinute = Math.floor((walk / car - carHour) * 60),
    carSecund = Math.floor(((walk / car - carHour) * 60 - carMinute) * 60);
  byCar.textContent = `${carHour} soat ${carMinute} minut ${carSecund} sekund`;
  //plane
  let planeHour = Math.floor(walk / plane),
    planeMinute = Math.floor((walk / plane - planeHour) * 60),
    planeSecund = Math.floor(
      ((walk / plane - planeHour) * 60 - planeMinute) * 60
    );
  byPlane.textContent = `${planeHour} soat ${planeMinute} minut ${planeSecund} sekund`;
} else {
  alert("Noto'g'ri malumot kiritildi");
}
