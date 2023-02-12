let h2 = document.querySelector('h2');//Task 1

console.log(document.querySelector('h2'));
console.log(h2.setAttribute('domh2','DOM method description')) ;
console.log(h2.outerHTML);

console.log(document.querySelector('a'));//Task 2
console.log(document.querySelector('[href = "site.ua/ua/page_2"]'));
console.log(document.querySelector('span'));


let list = document.querySelector('ul'); ///Task 3
let listLi = document.querySelector('li');
let firstLi = document.querySelector('li');
let liNull = document.createElement('li');
let secondLi = document.createElement('li');
let fourthLi = document.createElement('li');


liNull.innerHTML = 0;
list.prepend(liNull);
secondLi.innerHTML = 2;
firstLi.after(secondLi);
fourthLi.innerHTML = 4;
list.append(fourthLi);

let h1 = document.querySelector('h1');//Task 4
let a = document.createElement('a');
a.href = 'https://dom.spec.whatwg.org/';
a.id = 'link';
a.appendChild(document.createTextNode('ссылка'));
document.body.appendChild(a);
let parent = a.parentNode;
parent.insertBefore(a, h1);

