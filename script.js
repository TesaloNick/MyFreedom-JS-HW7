// 7. Отобразить элементы в случайном порядоке
// Используя метод sort перепишите предсталенный ниже код, который с помощью цикла for случайно изменяет порядок расстановки элементов массива.
// function shuffle(arr) {
//   function createRandom() {
//     let firstRandomNumber = Math.random()
//     let secondRandomNumber = Math.random()
//     return firstRandomNumber - secondRandomNumber;
//   }
//   return arr.sort(createRandom);
// }
// var array = [0, 1, 22, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(array));

// 8. Получить первые элементы массива
// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getFirst(array, n) {
//   if (!n) n = 1
//   return array.slice(0, n)
// };
// console.log(getFirst(array));    // 1
// console.log(getFirst(array, 4)); // 1,2,3,4
// console.log(getFirst(array, -3)); // 1,2,3,4,5,6

// 9. Получить последние элементы массива
// Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getLast(array, n) {
//   if (!n) n = 1
//   return array.slice(-n, array.length)
// };
// console.log(getLast(array));     // 9
// console.log(getLast(array, 4));  // 6,7,8,9
// console.log(getLast(array, 12)); // 1,2,3,4,5,6,7,8,9

// 10. Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];
// function isEmpty(biggerArray, smallerArray) {
//   return biggerArray.map((item, i) => {
//     let empty = 0
//     if (typeof smallerArray[i] !== 'undefined') empty = smallerArray[i]
//     return item + empty
//   })
// }
// const arr3 = (arr1, arr2) => (arr1.length > arr2.length) ? isEmpty(arr1, arr2) : isEmpty(arr2, arr1)
// console.log(arr3(arr1, arr2)); // [5,7,9,4,5]

// 1. Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша
// const formTask1 = document.querySelector('.form-task1')
const inputTask1 = document.querySelector('.input-task1')
const ulTask1 = document.querySelector('.ul-task1')

inputTask1.addEventListener('keydown', (event) => {
  const li = document.createElement('li')
  li.innerHTML = event.key
  ulTask1.append(li)
})

// 2. Вставить в разметку html теги input и div без js (просто предусмотреть в разметке). Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля)
// 2.1 Каждый раз при изменении данных в инпуте, в предусмотренный div должна вписываться фраза "Клиент набирает: ВСЕ_ЧТО_НАБРАНО_В_ИНПУТЕ".
const inputTask2 = document.querySelector('.input-task2')
const divTask2 = document.querySelector('.div-task2')
inputTask2.addEventListener('keyup', (event) => {
  event.preventDefault()
  divTask2.innerHTML = `Клиент набирает: ${inputTask2.value}`
})

//3. Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен (проставить пустую строку в value). Подсказки смотрите в последнем задании с предыдущего занятия в конспекте.
const formTask3 = document.querySelector('.form-task3')
const inputTask3 = document.querySelector('.input-task3')
const buttonTask3 = document.querySelector('.button-task3')
const ulTask3 = document.querySelector('.ul-task3')

formTask3.addEventListener('submit', (event) => {
  event.preventDefault()
  const li = document.createElement('li')
  li.innerHTML = inputTask3.value
  inputTask3.value = ''
  ulTask3.append(li)
})

// 4*. Калькулятор 2.0. Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div. Делать можно как с eval, так и с if-else.
const formTask4 = document.querySelector('.form-task4')
const inputTask4_1 = document.querySelector('.input-task4_1')
const inputTask4_2 = document.querySelector('.input-task4_2')
const buttonTask4 = document.querySelector('.button-task4')
const selectTask4 = document.querySelector('.select-task4')
const divTask4 = document.querySelector('.div-task4')
function selectSign(option) {
  switch (option) {
    case '+':
      return +inputTask4_1.value + +inputTask4_2.value
      break;
    case '-':
      return +inputTask4_1.value - +inputTask4_2.value
      break;
    case '*':
      return +inputTask4_1.value * +inputTask4_2.value
      break;
    case '/':
      return +inputTask4_1.value / +inputTask4_2.value
      break;
    default:
      break;
  }
}
formTask4.addEventListener('submit', (event) => {
  event.preventDefault()
  divTask4.innerHTML = selectSign(selectTask4.value)
})

// 5*. Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
const buttonTask5 = document.querySelector('.button-task5')
buttonTask5.addEventListener('mouseenter', () => {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  buttonTask5.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})
buttonTask5.addEventListener('mouseleave', () => {
  const deg = Math.floor(Math.random() * 360) - 180
  console.log(deg);
  buttonTask5.style.transform = `rotate(${deg}deg)`
})
