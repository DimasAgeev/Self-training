//let userName = 777;
//let newUserName = String(userName); // преобразование в строку

//let userAge = "60";
//let newUserName = +userAge; // конвертирует из строки в число

//console.log(newUserName);
//console.log(typeof newUserName);

// let userAge = prompt("Сколько Вам лет?");
// if (userAge > 18) {
//   alert("Заходи");
// } else if (userAge < 18) {
//   alert("Уходи");
// } else {
//   alert("введите корректные данные");
// }

// let consumption = prompt("Сколько литров у Вас осталось топлива");
// if (consumption > 12) {
//   alert("Вы доедите");
// } else if (consumption < 12) {
//   alert("Лучше не рискуйте");
// }

// let a = 5;
// let b = 3;
// console.log(a, b);
// // let x = a; // Первый способ
// // a = b;
// // b = x;
// a = a + b; // Второй способ
// b = a - b;
// a = a - b;
// console.log(a, b);

// let st1 = prompt("Введите первое слово");
// let st2 = prompt("Введите второе слово");
// let st3 = prompt("Введите второе слово");
// let l1 = st1.length;
// let l2 = st2.length;
// let l3 = st3.length;
// let rezult = `${st1[l1 - 1]}${st2[l2 - 1]}${st3[l3 - 1]}`;
// console.log(rezult);

// let str = "1234";
// let first = str[0];
// let second = str[1];
// let third = str[2];
// let four = str[3];
// //Первый способ
// // if(first == 2) {
// //   first = '_';
// // } else if (first = 5) {
// //   first = '';
// // } else if (first = 8) {
// //   first = '';
// // }
// //Второй способ
// if (first == "2" || first == "5" || first == "8") {
//   first = "_";
// } //И так повторяем для всех символов
// //Написать вывод в консоль
//Третий способ
// let str = prompt("введите число");
// let rezult = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[1] === "2" || str[1] === "6") {
// rezult += "_";
//   } else {
//     rezult +=str[i];
//   }
// }
// console.log(rezult);

// for (let i = 0; i <= 30; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizBuz");
//   } else if (i % 5 === 0) {
//     console.log("Fiz");
//   } else if (i % 3 === 0) {
//     console.log("Buz");
//   } else {
//     console.log(i);
//   }
// }

// let w = prompt("введите число");
// let summ = 0;
// for (let i = 0; i < w.length; i++) {
//   summ += Number(w[i]);
// }
// console.log(summ);

// let w = prompt("введите число");
// let summ = 0;
// let math = "";
// for (let i = 0; i < w.length; i++) {
//   if (i == w.length - 1) {
//     math += w[i] + "=";
//   } else {
//     math += w[i] + "+";
//   }
//   summ += Number(w[i]);
// }
// console.log(math, summ);

// let word = prompt("сколко чисел фибоначе вы хотите увидеть");
// let first = 0;
// let second = 1;
// let r = "";
// for (let i = 0; i <= word; i++) {
//   let next = first + second;
//   r += next + " ";
//   first = second;
//   second = next;
// }
// console.log(r);

// let n = prompt("введите число");
// let stars = "";
// for (let i = 0; i <= n; i++) {
//   stars += "*";
//   console.log(stars);
// }
// let user = prompt("введите имя");
// let newName = user[0].toUpperCase();

// for (let i=1; i<user.length; i++;) {
//   newName +=user[i].toLowerCase();
// }
// console.log(newName);

//ФУНКЦИИ

// function isOdd(number) {
//   // let rezult = number % 2 === 0;
//   // return rezult;
//   return number % 2 === 0;
// }

// console.log(isOdd(2));
// console.log(isOdd(4));

// function is_prime(number) {
//   let x = 0;
//   for (let i = 2; i < number; i++) {
//     let rezult = number % i === 0;
//     if (rezult) {
//       x++;
//     }
//   }
//   if (x > 0) {
//     return "Не простое";
//   } else {
//     return "Простое";
//   }
// }
// console.log(is_prime(6));

// function is_prime(number) {
//   let numbers = "";
//   for (let i = 2; i < number; i++) {
//     let rezult = number % i === 0;
//     if (rezult) {
//       numbers += ` ${i}`;
//     }
//   }
//   if (!numbers) {
//     return "Простое";
//   } else {
//     return `Число ${number} не простое. \nОно делится на ${numbers}`;
//   }
// }
// console.log(is_prime(58));

// function is_palindrom(string) {
//   for (let i = 0; i < string.length; i++) {
//     console.log(string[i] + " " + string[string.length - i - 1]);
//     if (string[i] != string[string.length - i - 1]) {
//       return "Ne palindrom";
//     }
//   }
//   return "Palindrom";
// }
// console.log(is_palindrom("1221"));
// function n(userName) {
//   let correctName = "";
//   for (let i = 1; i < userName.length; i++) {
//     if (userName[i] !== " ") {
//       correctName += userName[i];
//     }
//   }
//   return correctName;
// }
// console.log(n(11111));

// ОБЪЕКТЫ
// Перезапись свойства
// let userInfo = {
//   name: "Вася",
//   age: 30,
//   58: "значение свойства",
// };
// let user = userInfo;
// user.age = 56;
// console.log(user["age"]);

//this обращается к name именно в объекте userInfo! Вывод через функцию!
// let userInfo = {
//   name: "Вася",
//   age: 30,
//   showInfo() {
//     console.log(`${this.name}`);
//   },
// };
// let user = userInfo;
// user.showInfo();

// Циклы
// let userInfo = {
//   name: "Вася",
//   age: 30,
// };
// for (let key in userInfo) {
//   //Переберает все свойства
//   console.log(key); //Выводит имя свойства
//   console.log(userInfo[key]); //Выводит значение свойства
// }

let userInfo = {
  name: "Вася",
  age: 30,
  address: {
    city: "Uzhhorod",
  },
};
for (let key in userInfo.address) {
  console.log(userInfo.address[key]);
}
