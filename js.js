// alert("111");

// //Задание 1
// function alertik() {
//   alert("Тест удачный!");
// }
// let test = document.querySelector(".button1");
// test.addEventListener("click", alertik);



// //Задание 2
// function zapolnenie() {
//   inputik.value = "test@email.ru";
// }
// let inputik = document.querySelector(".input1");
// let knopochka = document.querySelector(".button2");
// knopochka.addEventListener("click", zapolnenie);
// // Конец


// //Задание 3
// function alertVivod() {
//   if (inputik2.value != null) alert("Вы ввели текст inputa");
//   else alert("Вы ничего не ввели в поле, введите пожалуйста значения");
// }

// let buttonchik_First = document.querySelector(".button3");
// let inputik2 = document.querySelector(".input2");

// buttonchik_First.addEventListener("click", alertVivod);


// Задание 4
// function reverse() {
//   let helpwe = inputik3.value;
//   inputik3.value = inputik4.value;
//   inputik4.value = helpwe;
// }

// let buttonchik_Second = document.querySelector(".button4");
// let inputik3 = document.querySelector(".input3");
// let inputik4 = document.querySelector(".input4");
// buttonchik_Second.addEventListener("click", reverse);


// // Задание 5
// function ban() {
//   inputik5.setAttribute("disabled", "disable");
// }
// function unBan() {
//   inputik5.removeAttribute("disabled");
// }
// let inputik5 = document.querySelector(".input5");
// let banchik = document.querySelector(".button5");
// let unBanchik = document.querySelector(".button6");
// banchik.addEventListener("click", ban);
// unBanchik.addEventListener("click", unBan);


// Задание 6
// function squareHideShow() {
//   if (knopka.innerHTML == "Скрыть квадрат") {
//     squareCube.style.display = "none";
//     knopka.innerHTML = "Показать квадрат";
//   } else {
//     squareCube.style.display = "block";
//     knopka.innerHTML = "Скрыть квадрат";
//   }
// }
// let knopka = document.querySelector(".button7");
// let squareCube = document.querySelector(".square");
// knopka.addEventListener("click", squareHideShow);


// Задание 7

let RedGreen = document.querySelector(".RedGreen");
function over() {
  RedGreen.style.backgroundColor = "green"
}
function out() {
  RedGreen.style.backgroundColor = "red"
}
RedGreen.addEvenListener("click", over);
RedGreen.addEvenListener("mouseover", out);
