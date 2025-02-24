let calculate = document.querySelector(".p");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let span = document.querySelector("span");
let res = document.querySelector(".result");
let answerCount = 0;
let firstNum;
let secondNum;
newProduct();
let timerText = document.querySelector(".timer");
let timer = 60;
function updateTimer() {
  if (timer > 0) {
    timer--; // Уменьшаем значение таймера на 1
    timerText.textContent = timer; // Обновляем текст на странице
  } else {
    alert("время вышла");
    clearInterval(intervalId); // Останавливаем таймер, когда он достигнет 0
  }
}

let intervalId = setInterval(updateTimer, 1000); // Запускаем обновление каждую секунду

function newProduct() {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  firstNum = getRandomNumber(1, 9);
  secondNum = getRandomNumber(1, 9);
  calculate.textContent = `${firstNum} * ${secondNum}`;
}
btn.addEventListener("click", () => {
  if (firstNum * secondNum === Number(input.value)) {
    span.innerText = "true";
    answerCount++;
    timer = timer + 3;
    newProduct();
  } else {
    span.innerText = "false";
    input.style.border = "1px solid red";
    timer = timer - 10;
  }
  input.value = "";
  input.focus();
});
