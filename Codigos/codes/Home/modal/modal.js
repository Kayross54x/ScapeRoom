var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector("#continue");
const audio = document.querySelector("audio");
modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
  pauser();
  audio.pause();
});
modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

var modalintroducaobtn = document.querySelector(".start");
var modalintroducao = document.querySelector(".introducao");
var introducaoclose = document.querySelector("#iniciar");

modalintroducaobtn.addEventListener("click", function () {
  modalintroducao.classList.add("introducao-active");
});

introducaoclose.addEventListener("click", function () {
  modalintroducao.classList.remove("introducao-active");
});
