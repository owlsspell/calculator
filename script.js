let block = document.querySelector(".block_number");
let out = document.querySelector(".out");
let input = document.querySelector(".input");
let buttons = document.getElementsByClassName("buttons");
let operator = document.getElementsByClassName("buttons-operator");

for (let i = 0; i < 10; i++) {
  block.innerHTML += `<button class="buttons" value="${i}">${i}</button>`;
}

let arrButtons = Array.from(buttons);

function enterResult() {
  out.textContent = eval(out.textContent);
  if (out.textContent == Infinity) {
    out.textContent = "На ноль делить нельзя";
  }
  input.value = "";
}

input.oninput = () => {
  out.textContent = input.value;
};

for (let i = 0; i < arrButtons.length; i++) {
  arrButtons[i] = +buttons[i].textContent;

  buttons[i].onclick = () => {
    input.value += buttons[i].value;
    out.textContent += buttons[i].value;
  };
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    input.value = "";
    out.textContent += input.value + operator[i].value;
  });
}

document.querySelector(".result").addEventListener("click", () => {
  enterResult();
});

document.querySelector(".delete-button").addEventListener("click", () => {
  input.value = input.value.substring(0, input.value.length - 1);

  out.textContent = out.textContent.substring(0, out.textContent.length - 1);
});

document.querySelector(".clear").addEventListener("click", function () {
  input.value = "";
  out.textContent = "";
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    enterResult();
  }
});

enterResult();
