'use strict'

//1

const str1 = 'aaa@bbb@ccc';

console.log('-----1-----');
console.log(str1.replace(/@/g, '!'));

//2

const date = '2025-12-31';

console.log('-----2-----');
console.log(date.replace(/-/g, '/'));


//3

const str3 = 'Я учу javascript!';

console.log('-----3-----');
console.log(str3.substring(2, 5));
console.log(str3.substring(6));
console.log(str3.slice(6, 16));

//4

const arr4 = [4, 2, 5, 19, 13, 0, 10];

const sumNumber = (arr4) => {
    const sum = arr4.reduce((acc, el) => acc  + el**3, 0);
    
    return Math.sqrt(sum);
}

console.log('-----4-----');
console.log(sumNumber(arr4));

//5

const getNumber = (a, b) => {
  let c = a - b;
  if (c < 0){
    c = (String(c).slice(1));
    return Number(c);
  }
  return c;
}

console.log('-----5-----');
console.log(getNumber(7, 4));
console.log(getNumber(5, 7));

//6

let dateNow = new Date();

console.log('-----6-----');
console.log(dateNow.toLocaleString('ru'));

//7

let str7 = 'aa aba abba abbba abca abea';

console.log('-----7-----');
console.log(str7.match(/ab+a/g));  

//let str = 'Иваан Иванов';

//console.log(str.replace(/ва+н/, '!'))

//8

//let str = '+375 29 123 45 67'
//console.log(/^\+375\s[2-4][3-4,9]\s\d{3}\s\d{2}\s\d{2}/gi.test(str));

const re = /^\+375[\s|-][2-4][3-4,9][\s|-]\d{3}[\s|-]\d{2}[\s|-]\d{2}$/;

function testInfo (phoneInput) {
	let test = re.test(phoneInput);
  	return test;
}

console.log('-----8-----');    
console.log(testInfo('+375 29 111 11 11'));
console.log(testInfo('+375 00 111 11 11'));
console.log(testInfo('+375-33-111-11-11'));

//9

const isValidMail = mail => {
  const regex = /^\w+[-|_|\d+](\d+|\w+)\@[a-z]{2,11}\.[a-z]{2,11}$/;
  const test = regex.test(mail);
  return test;
}

console.log('-----9-----'); 
console.log(isValidMail('test123@mail.ru'))
console.log(isValidMail('test_123@mail.ru'))
console.log(isValidMail('1test3@mail.ru'))
console.log(isValidMail('test123@mail.r'))