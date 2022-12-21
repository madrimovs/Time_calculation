const walking = document.querySelector(".walk"),
  byBice = document.querySelector(".bice"),
  byCar = document.querySelector(".car"),
  byPlane = document.querySelector(".plane"),
  elInput = document.querySelector(".input"),
  elForm = document.querySelector(".form");

function generateTime(space, speed) {
  const hour = Math.floor(space / speed),
    minute = Math.floor((space / speed - hour) * 60),
    sec = Math.floor(((space / speed - hour) * 60 - minute) * 60);

  return `${hour} soat ${minute} minut ${sec} sekund`;
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const space = Number(elInput.value);
  elInput.value = "";

  const walk = 3.6,
    bice = 20.1,
    car = 70,
    plane = 800;

  if (!isNaN(space)) {
    const personTime = generateTime(space, walk),
      biceTime = generateTime(space, bice),
      carTime = generateTime(space, car),
      planeTime = generateTime(space, plane);

    walking.textContent = personTime;
    byBice.textContent = biceTime;
    byCar.textContent = carTime;
    byPlane.textContent = planeTime;
  }
});
