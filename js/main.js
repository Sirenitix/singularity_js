// const reverse = (a) => {
//   if(typeof a === "string"){
//     let b = []
//     let splitString = a.split("");
//     for (let i = a.length-1; i >= 0; i--) {
//       b.push(a[i])
//     }
//     let joinArray = b.join("");
//     a = joinArray;
//     console.log(a)
//   }
//   if(Array.isArray(a)){
//     let b = []
//     for (let i = a.length-1; i >= 0; i--) {
//       b.push(a[i])
//     }
//       a = b
//     console.log(a)
//   }
// };

// const reverse = (a) => {
//   if(typeof a === "string"){
//     let splitString = a.split("");
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");
//     a = joinArray;
//     console.log(a)
//   }
//   if(Array.isArray(a)){
//     a = a.reverse()
//     console.log(a)
//   }
// };

// console.log(reverse([1,2,3]))
// console.log(reverse("UTF"))
// reverse([ 'add', 2, 1 ])
// function dayOfTheYear(date) {
//   let dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
//   return dayOfYear
//
// }
// console.log(dayOfTheYear(new Date(2019, 1, 15)))
//dayOfTheYear(new Date(2019, 0, 0))

// function canGetCount(n) {
//   function counter(){
//     n--
//     if(n >= 0){
//       return "yes"
//     }else{
//       return "no"
//     }
//   }
//   return counter
// }
//
// const getOne = canGetCount(2);
// console.log(getOne);
//
//
// class User {
//   constructor(name,surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   getFullname(){
//     return this.name + " " + this.surname
//   }
// }
//
// class Account extends User {
//   constructor(name,surname,balance) {
//     super(name, surname);
//     if(typeof balance == "number"){
//       this.balance = balance;
//     }else {
//       console.log("Ошибка, salary может быть только числом")
//     }
//   }
//   getSalary() {
//   return this.balance
//   }
// }
//
// class UrlСonstructor {
//   constructor(url) {
//     this.url = encodeURI(url)
//     this.params = {}
//     this.tempParam = {}
//     this.tempParam = this.params
//
//     if (decodeURI(this.url).includes("?")){
//       let paramString = url.split('?')[1];
//       let queryString = new URLSearchParams(paramString);
//       for(let pair of queryString.entries()) {
//         // console.log("Key is:" + pair[0]);
//         // console.log("Value is:" + pair[1]);
//         this.params[pair[0]] = pair[1]
//       }
//     }
//   }
//
//
//   construct(){
//     let baseUrl = decodeURI(this.url)
//     let param = ""
//     if(Object.keys(this.tempParam).length !== 0){
//       baseUrl = baseUrl + "?"
//       for (const [key, value] of Object.entries(this.tempParam)) {
//         param = param + "" + key + "=" + value + "&"
//       }
//       param = param.slice(0,-1)
//       this.tempParam = this.params
//       return encodeURI(baseUrl + param)
//     }else {
//       this.tempParam = this.params
//       return encodeURI(baseUrl)
//     }
//
//
//   }
//
//   removeAll(){
//     this.tempParam = {}
//     this.url = encodeURI(decodeURI(this.url).substring(0, decodeURI(this.url).indexOf('?')));
//     return this.url
//   }
//
// }
//
// let constructor = new UrlСonstructor("https://jmart.kz/products");
// constructor.params.category_id = 2879;
//
// console.log(constructor.construct()); //https://jmart.kz/products?category_id=2879
//
// console.log(constructor = new UrlСonstructor("https://jmart.kz/products?category_id=2879"));
// console.log(constructor.params.category_id); //2879
// console.log(constructor.params.test); //undefined
//
// console.log(constructor.removeAll()); // https://jmart.kz/products
// console.log(constructor.construct()); // https://jmart.kz/products
//

function Book(name) {
  this.name = name;
}

Book.prototype = {
  getName: function () {
    return this.name;
  },

  getUpperName(){
    return this.name.toUpperCase()
  }
};

var book = new Book("The Great Gatsby");
console.log(book.getUpperName());
