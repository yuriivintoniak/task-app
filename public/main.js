
// let arr = [3, 5, -1, -3, -2, 2, 3];

// alert( arr[-1] );


// function conditionFunc(firstParam, secondParam) {

//   let result;
  
//   if (firstParam === "JavaScript" && secondParam >= 7 && secondParam <= 15) {
//     result = "Prometheus";
//   } else if (firstParam !== "JavaScript" && secondParam === 10) {
//     result = 42;
//   } else if (firstParam === "JavaScript" && secondParam >= 16) {
//     result = "Developer";
//   } else if (firstParam !== "JavaScript" && secondParam >= 16) {
//     result = "else";
//   }

//   return result;

// };

// console.log( conditionFunc("Java", 16) );



// function generateNumbers(n, m) {

// 	let result = "";
  
//   for (let i = n; i <= m; i++) {
//     result += "," + i;
//   }

//   return result;
  
// }

// console.log( generateNumbers(2, 6) );

// function sumNumbers(n, m) {

// 	let result = null;

//   for (let i = n; i <= m; i++) {
//     result += i;
//   }
  
// 	return result;

// }

// console.log( sumNumbers(2, 7) );


// let n = +prompt("Введіть ціле число");
// let result = 1;

// if ( Number.isNaN(n) ) {

//   alert("Введене значення не є числом");
//   n = +prompt("Введіть ціле число");
  
// } else {

  // for (let i = 0; i < n; i++) {
  //   result *= i + 1;
  // }

// } 

// alert(`Факторіал числа ${n} дорівнює ${result}`);


// if ( Number.isNaN(n) ) {
//   alert("Введене значення не є числом");
//   while ( Number.isNaN(n) ) {
//     result = +prompt("Введіть ціле число");
    
//   } 
// } else {
//   for (let i = 0; i < n; i++) {
//     result *= i + 1;
//   }
// } 

// alert(`Факторіал числа ${n} дорівнює ${result}`);


// let n = +prompt("Введіть ціле число");
// let result = 1;

// for (let i = 0; i < n; i++) {
//   result *= i + 1;
// }

// alert(`Факторіал числа ${n} дорівнює ${result}`);


// let n = +prompt("Введіть ціле число");
// let result = 1;

// while ( Number.isNaN(n) ) {
//   n = +prompt("Введіть ціле число");
// }


// let n;
// let result = 1;

// do {
//   n = +prompt("Введіть ціле число");
// } while ( Number.isNaN(n) )

// for (let i = 0; i < n; i++) {
//   result *= i + 1;
// }

// alert(`Факторіал числа ${n} дорівнює ${result}`);


// function multiplyNumeric(object) {
//   for (let key in object) {
//     if (typeof object[key] == "number") {
//       object[key] *= 2;
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// console.log(menu);


// const sumNegative = (array) => {
//   let result = [];
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       sum += array[i]; 
//       result.push( array[i] );
//     }
//   }

//   return sum;
// }

// const arr = [1, 2, -67, -48, -86];

// sumNegative(arr);

// console.log( sumNegative(arr) );


// const findById = (array, item) => {

//   let result = {};
  
//   result = array.find( (item) => item.id == 2 );

//   for (let i = 0; i < array.length; i++) {
//     if (array.includes(item)) {
//       result = item;
//     }
//   }

//   return result;
// }

// const arr = [
//   { name: "name1", id: 1 }, 
//   { name: "name2", id: 2 }, 
//   { name: "name3", id: 3 }
// ];

// console.log( findById(arr, 3) );


// const cubedValues = (array) => {
//   const result = array.map( (item) => Math.pow(item, 3) );
//   return result;
// }

// const arr = [1, 3, -2];
// console.log( cubedValues(arr) );


// const arr = [1, 2, 3, 4, 5];
// const output = arr.map((num) => Math.pow(num, 3));
// console.log(output);


// const fillArray = (start, end, exception) => {
//   let result = [];

//   for (let i = start; i <= end; i++) {
//     if (i % exception !== 0) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log( fillArray(1, 11, 2) );


// const student = {
//   id: 2, 
//   surname: 'surname', 
//   seniorityLevel: 'Trainee'
// };

// const addObjectProperty = (object) => {
//   let result;

  // Object.defineProperty(object, 'seniorityLevel', {
  //   value: 'Junior'
  // });
  
//   object.seniorityLevel = 'Junior';
//   result = object;
//   return result;
  
//   Object.defineProperties(object, {
//     seniorityLevel: {
//       value: 'Junior'
//     }
//   });

//   result = object;

//   result = Object.defineProperty(object, 'seniorityLevel', {
//     value: 'Junior'
//   });

//   result = Object.assign({}, object);
//   result.seniorityLevel = 'Junior';

//   return result;
// }

// console.log( addObjectProperty(student) );


// const user = {
//   id: 2, 
//   name: "name", 
//   isAdmin: false
// };

// const objectProperties = (object) => {
//   let result = Object.keys(object);
//   return result;
// };

// console.log( objectProperties(user) );


// const target = document.querySelector('.target');

// const newElement = document.createElement('li');
// const newElement1 = document.createElement('li');
// const newTextNode = document.createTextNode('Елемент списку');

// target.before(newElement);
// newElement.classList.add('target');
// newElement.innerText = 'Елемент списку';

// target.after(newElement1);
// newElement1.classList.add('target');
// newElement1.innerText = 'Елемент списку';


// const validateInput = () => {
//   const myInput = document.querySelector('input');
  
//   myInput.addEventListener( 'input', () => {
//     if (myInput.value.length === 0 ) {
//       myInput.style.borderColor = '#cccccc';
//     } else if (myInput.value.length >= 1 && myInput.value.length <= 15) {
//       myInput.style.borderColor = 'blue';
//     } else if (myInput.value.length > 15) {
//       myInput.style.borderColor = 'red';
//     }
//   });
// };

// validateInput();


// var p = document.createElement('p');
// var out = document.querySelector('.out');

// p.innerHTML = 'Hello world';
// p.classList.add('main', 'green');
// document.body.appendChild(p);
// p.classList.toggle('main');
// document.body.insertBefore(p, out);


// console.log(p);

// console.log('worker');
// console.log(this.innerHeight);

// function myFunction() {
//   console.log(this);
//   this.style.background = 'red';
// }

// console.log(this);

// document.querySelector('button').onclick = function() {
//   console.log(this);
// }


// myFunction();
// document.querySelector('.test').onclick = myFunction;

// let div = document.querySelectorAll('div');
// div.forEach( (element) => {
//   element.onclick = myFunction;
// });

// p.onclick = myFunction;
// p.addEventListener('click', myFunction);
// document.querySelector('.out').addEventListener('click', myFunction);

// let div = document.querySelectorAll('div');
// div.forEach( (element) => {
//   element.addEventListener('click', myFunction);
// });


// function manipulateDOM() {

//   const target = document.querySelector('.target');
//   const newTag = document.createElement('li');
//   const newElement = document.createElement('li');
  
//   target.before(newTag);
//   newTag.innerHTML = 'Елемент списку'; 
//   target.after(newElement);
//   newElement.innerHTML = 'Елемент списку';
//   newTag.classList.add('inserted'); 
//   newElement.classList.add('inserted');

//   document.querySelector('ul').classList.add('updated');

//   const paragraph = document.createElement('p');
//   paragraph.innerHTML = 'Successfully updated!'
//   paragraph.style.color = '#aa0000';
//   document.querySelector('div').appendChild(paragraph);

//   let n = 0;
//   const list = document.querySelector('ul');
  
//   list.addEventListener('click', () => {
//     n++;
//     paragraph.innerHTML = `Click fired: ${n} разів!`;
//   });

// }

// manipulateDOM();


// const person = {
//   name: 'Petro',
//   age: 35,
//   gender: 'male',
//   education: 'university',
//   occupation: 'developer',
//   isAdmin: true
// };

// const person1 = {
//   name: 'Jane',
//   age: 37,
//   gender: 'female',
//   education: 'college',
//   occupation: 'designer',
//   isAdmin: false
// };

// function processPerson(person) {
//   if (person && typeof person === 'object') {
//     const genders = {
//       male: 'Чоловік',
//       female: 'Жінка'
//     };

//     let summary = 'Інформація про особу: \n';

//     summary += genders[person.gender] || 'Особа невідомої статі';
//     summary += ' ' + person.name;
//     summary += ' віком ' + person.age + ' роки(-ів)';
//     summary += ' має освіту на рівні ' + person.education;
//     summary += ' та працює на посаді ' + person.occupation + '.';

//     if (person.isAdmin) {
//       summary += ' Є адміністратором.';
//     }

//     return summary;
//   }

//   throw new Error("Очікується об'єкт");
// }

// console.log(processPerson());


// Callbacks -----------------------------------------------
// function display(data) {
//   document.getElementById('display').innerHTML = data;
// }

// function multiply(num1, num2, callback) {
//   const result = num1 * num2;
//   callback(result);
// }

// function toConsole(data) {
//   console.log(data);
// }

// multiply(7, 8, display);
// multiply(5, 5, toConsole);


// const isOdd = (number) => {
//   return number % 2 !== 0;
// }

// const isEven = (number) => {
//   return number % 2 === 0;
// }

// const arr = [1, 2, 3, 4, 5, 6];

// function filter(array, callback) {
//   let result = [];
//   for (const item of array) {
//     if (callback(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }


function myPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve('async hello'), 3000);
  })
}

async function promiseAction() {
  const result = await myPromise();
  console.log(result);
}

// promiseAction();


// Promises-----------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     console.log(response)
//     return response.json()
//   })
//   .then(json => console.log(json))
//   .catch(error => console.error(error))


// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error.message))


// const getData = (url) =>
//   new Promise((resolve, reject) =>
//     fetch(url)
//       .then(response => response.json())
//       .then(json => resolve(json))
//       .catch(error => reject(error))
//   )

// getData('https://jsonplaceholder.typicode.com/todos')
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message))


// const getData = async (url) => {
//   const res = await fetch(url)
//   const json = await res.json()
//   return json
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'

// const data = await getData(url)

// Callbacks-----------------------------------------------------------
// function getCats(callback) {
//   fetch('https://cat-fact.herokuapp.com/facts')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     callback(data);
//   })
// }

// function showCats(cats) {
//   cats.forEach(item => console.log(item.status));
// }

// getCats(showCats);


const arr1 = [7, 4, 5, 6, 8];

const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');

function func(arr, block, callback) {
  arr[3] *= 2;
  callback(arr, block);
}

function showArr(array, blocks) {
  let out = '';
  for (let i = 0; i < array.length; i++) {
    out += array[i] + '_';
  }
  blocks.innerHTML = out;
}

func(arr1, out1, showArr);
func(arr1, out2, showArr);

// function squad(item) {
//   return item**2;
// }

const arr2 = arr1.map(item => item**2);
console.log(arr2);
showArr(arr2, out3);


document.querySelector('.button').addEventListener('click', () => {
  const userName = document.querySelector('.input').value;
  console.log(userName);
});


function createWrapper(fn, callback) {
  return function(...data) {
    try {
      callback(null, fn(...data));
    } catch {
      callback(new Error(), null);
    }
  }
}

















// function calculatePrice(day, time) {

//   let price = 2.3;

//   const weekends = [6, 7];

//   if (weekends.includes(day)) {
//     price = price * 0.8;
//   }

//   if (day === 6 || day === 7) {
//     price = price * 0.8;
//   }

//   const cost = price * time;

//   console.log(cost);

// }

// calculatePrice(7, 1);


// function myFunction(a, b, c) {
//   let m;

//   if (a >= b ) {
//     m = a;
//   } else {
//     m = b;
//   } 

//   if (m < c) {
//     m = c;
//   }

//   console.log(m);
// }

// myFunction(4, 2, 3);


// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("Введите число", 0);

//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   alert(numbers);

//   let sum = 0;

//   for (let number of numbers) {
//     sum += number; 
//   }
//   return sum;
// }

// alert( sumInput() );


// function camelize(string) {
//   return string
//     .split("-")
//     .map(
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// alert( camelize("-webkit-transition") );


// function filterRange(arr, a, b) {
//   return arr.filter( (item) => (a <= item && item <= b) );
// }

// let array = [1, 5, 3, 8];
// let filtered = filterRange(array, 2, 6);

// console.log(array);
// console.log(filtered);


// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];

//     console.log(value);

//     if (value < a || value > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }

// let array = [5, 3, 8, 1];

// filterRangeInPlace(array, 1, 4);

// console.log(array);


// let age = 25;

// logAge(age);
// console.log(age);

// function logAge(years) {
//   age = 42;
//   console.log(years);
// }


// const obj1 = {
//   name: "object1",
//   doSmth: function() { 
//     console.log(this.name);
//   }
// };

// const obj2 = {
//   name: "object2",
//   fn: obj1.doSmth
// };

// obj2.fn();
// obj1.doSmth();


// let arr = [1, 0, 3, -20, 148];

// const maxValue = (array) => {
//   let result = array[0];

//   for (let item of array) {
//     if (result < item) {
//       result = item;
//     }

//   }

//   return result;
// }

// console.log( maxValue(arr) );


// const filterNegative = (array) => {
  
//   const result = array.filter((item) => item < 0)
    
//   return result;

//   for (let i = 0; i <= array.length; i++) {
//     result = array.filter( (item) => item < 0 );
//   }

//   for (let item of array) {
//     result = array.filter( (item) => item < 0 );
//   } 

//   return result;
// }

// const arr = [1, 2, -67, -48, -41];

// console.log(filterNegative(arr));


// const filterNegative = (array) => {
  
//   const result = array
//     .filter((item) => item > 0)
//     .reduce((sum, current) => sum + current, 0);

//   return result;

// }

// const arr = [1, 2, -67, -48];

// console.log(filterNegative(arr));


// const arr = [21, -63, -2, "58", 1, "string", -36, "name"];

// const filterNegative = (array) => {
//   const result = array.filter((item) => Number.isFinite(item));
//   return result;
// }

// console.log(filterNegative(arr));
