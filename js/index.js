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

// function Book(name) {
//   this.name = name;
// }

// Book.prototype = {
//   getName: function () {
//     return this.name;
//   },

//   getUpperName(){
//     return this.name.toUpperCase()
//   }
// };

// var book = new Book("The Great Gatsby");
// console.log(book.getUpperName());




// function isValid(date) {
//   let isValidDate = Date.parse(date);
//   if (isNaN(isValidDate)) {
//     return false
//   }
//   else{
//     return true
//   }
// }

// function isAfter(date, date2) {
//   if(date > date2){
//     return true
//   }else{
//     return false
//   }
// }

// function isBefore(date, date2) {
//   if(date < date2){
//     return true
//   }else{
//     return false
//   }
// }

// function isFuture(date) {
//   if(date > new Date()){
//     return true
//   }else{
//     return false
//   }
// }

// function isPast(date) {
//   if(date < new Date()){
//     return true
//   }else{
//     return false
//   }
// }


// let date = new Date();
// let date2 = new Date("");

// console.log(isValid(date)); //true
// console.log(isValid(date2)); //false
// console.log(date)


// let is = {};
// is.num = (arg) => typeof arg === "number" ?  true : false;
// is.nan = (arg) => Number.isNaN(arg) ?  true : false;
// is.str = (arg) => typeof arg === "string" ?  true : false;
// is.bool = (arg) => typeof arg === "boolean" ?  true : false;
// is.undef = (arg) => typeof arg === "undefined" ?  true : false;
// is.arr = (arg) => Array.isArray(arg)  ?  true : false;
// is.obj = (arg) => typeof arg === "object"  ?  true : false;
// is.fun = (arg) => typeof arg === "function" ?  true : false;
// is.truthy = (arg) => arg ?  true : false;
// is.falsy = (arg) => arg ?  false : true;

// console.log(is.truthy("🍀"));
// console.log(is.truthy(0)); // false

// console.log(is.falsy(0)); // true

// console.log(is.fun(() => {})); //true
// console.log(is.fun({})); //false

// console.log(is.num(NaN)); //true

// console.log(is.nan(NaN)); //true


// function Car(speed, brand) {
//   this.speed = speed;
//   this.brand = brand;

//   this.status = function () {
//     return this.brand + " running at " + this.speed + " km/h";
//   };

//   this.accelerate = function(value){
//     this.speed = this.speed + value
//   }

//   this.brake = function(value){
//     this.speed = this.speed - value
//   }
// }

// let car = new Car(0, "Lada");
// car.accelerate(20);
// console.log(car.status()); // Lada running at 20 km/h
// car.brake(5);
// console.log(car.status()); // Lada running at 15 km/h


// const forEach = (array, func) => {
//   for (let i = 0; i < array.length; i++) {
//     func(array[i])
//   }

// }

// const displayMethods = (obj) => {
//   return  Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')
//  }

// const citiesOnly = (obj) => {
//   let cities = []
//   for (let i = 0; i < obj.length; i++) {
//     for (const [key, value] of Object.entries(obj[i])) {
//         if(key === "city"){
//           cities.push(value)
//         }
//     }
//   }
//   return cities;
// }


// const tempForecasts = (arr) => {
//   const resArr = [];
//   const temps = farToCelc(arr);
//   for(let i = 0; i<arr.length; i++){
//       resArr.push(`${temps[i]}°Celsius in ${arr[i].city}, ${capitalize(arr[i].state)}`)
//   }
//    return resArr;
// }

// const farToCelc = (arr) => {
//    const temps = [];
//    for(let i = 0; i<arr.length; i++){
//       temps.push(Math.floor((parseInt(arr[i].temperature) - 32) * 5/9));
//   }
//   return temps;
// }

// const capitalize = (string) => {
//   return string.replace(/\b\w/g, char => char.toUpperCase())
// } //P.S thx for Ilyas


// const hasOddNumber = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !== 0){
//       return true
//     }
//   }
//   return false;
// }


// const adder = (arr, result) => {
//   let sum = 0;
//   if(result){
//     for (let i = result; i < arr.length; i++) {
//       sum +=arr[i]
//     }
//   }else {
//     for (let i = 0; i < arr.length; i++) {
//       sum +=arr[i]
//     }
//   }
//   return sum
// }

// const isEqual2 = (firstObj, secondObj) => {
//   if(JSON.stringify(firstObj) === JSON.stringify(secondObj)){
//     return true
//   }else {
//     return false
//   }
// };


// const sumOrMul = (arr, result) => {
//   if(!result){
//       result = 0
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr [i] % 2 !== 0) {
//       result = arr[i] + result
//     } else {
//       result = arr[i] * result
//     }
//     console.log(result)
//   }

//   return result
// };

// console.log(sumOrMul([1, 2, 3, 5, 8], 5))


// const isEmpty = (object) => {
//   let counter = 0
//   console.log(object)
//   if(Object.entries(object).length === 0){
//     return true
//   }

//   for (const [key, value] of Object.entries(object)) {
//           if(typeof value !== "undefined"){
//             counter++
//           }
//   }
//   if(counter > 0){
//     return false
//   }else{
//     return true
//   }
//  return false
// }

// console.log(isEmpty({})); //true
// console.log(isEmpty({ a: undefined })); //true,
// console.log(isEmpty({ a: 1 })); //false
// console.log(isEmpty({ a: 1, b: undefined }))
