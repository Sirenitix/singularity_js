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
//
// }
//
// let arr = [1, 2, 3];
//
// function log(a) {
//   console.log(a);
// }
//
// forEach(arr, log);

//
// const displayMethods = (obj) => {
//   return  Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')
// }
//
// console.log(displayMethods(new Array()));

//
// const citiesOnly = (obj) => {
//   let cities = []
//   for (let i = 0; i < obj.length; i++) {
//     for (const [key, value] of Object.entries(obj[i])) {
//       if(key === "city"){
//         cities.push(value)
//       }
//     }
//   }
//   return cities;
// }
//
// console.log(citiesOnly([
//   {
//     city: "Los Angeles",
//     temperature: "  101 °F   ",
//   },
//   {
//     city: "San Francisco",
//     temperature: " 84 ° F   ",
//   },
// ]) )

// const tempForecasts = (obj) => {
//   let aboutTemperature = []
//   let str = ""
//   let city = ""
//   for (let i = 0; i < obj.length; i++) {
//     for (const [key, value] of Object.entries(obj[i])) {
//         if(key === "city"){
//           city = value
//         }
//
//         if(key === "temperature"){
//           str = str + fToC(value.match(/\d+/)[0])
//           // console.log(fToC(value.match(/\d+/)[0]))
//           str = str + "°Celsius in " + city + ", "
//         }
//
//         if(key === "state"){
//           const words = value.split(" ");
//           for (let i = 0; i < words.length; i++) {
//             words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//           }
//
//           str = str + words
//         }
//     }
//     aboutTemperature.push(str)
//     str = ""
//   }
//
//   return aboutTemperature;
// }
//
// function fToC(fahrenheit)
// {
//   return ""+Math.floor(((parseInt(fahrenheit) - 32) * (5/9)));
// }
//
// const tempForecasts = (obj) => {
//   let aboutTemperature = []
//   let str = ""
//   let city = ""
//   for (let i = 0; i < obj.length; i++) {
//     for (const [key, value] of Object.entries(obj[i])) {
//       if(key === "city"){
//         city = value
//       }
//
//       if(key === "temperature"){
//         str = str + fToC(parseInt(value+""))
//         // console.log(fToC(value.match(/\d+/)[0]))
//         str = str + "°Celsius in " + city + ", "
//       }
//
//       if(key === "state"){
//         const words = value.split(" ");
//         for (let i = 0; i < words.length; i++) {
//           words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//         }
//
//         str = str + words
//       }
//     }
//     aboutTemperature.push(str + ``)
//     str = ""
//   }
//
//   return aboutTemperature;
// }
//
// function fToC(fahrenheit)
// {
//   return Math.floor((5/9) * (parseInt(fahrenheit) - 32));
// }

// const tempForecasts = (obj) => {
//   let aboutTemperature = []
//   let str = ""
//   let city = ""
//   for (let i = 0; i < obj.length; i++) {
//     for (const [key, value] of Object.entries(obj[i])) {
//       if(key === "city"){
//         city = value
//       }
//
//       if(key === "temperature"){
//         str = str + fToC(parseInt(value+""))
//         // console.log(fToC(value.match(/\d+/)[0]))
//         str = str + "°Celsius in " + city + ", "
//       }
//
//       if(key === "state"){
//         const words = value.split(" ");
//         for (let i = 0; i < words.length; i++) {
//           words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//         }
//
//         str = str + words
//       }
//     }
//     aboutTemperature.push(str + ``)
//     str = ""
//   }
//
//   return aboutTemperature;
// }
//
// function fToC(fahrenheit)
// {
//   return Math.floor((5/9) * (parseInt(fahrenheit) - 32));
// }
//
//
// console.log(tempForecasts([
//   { city: 'Los Angeles',
//     temperature: '101 °F',
//     state: 'california',
//     region: 'West' },
//   { city: 'San Francisco',
//     temperature: '84 °F',
//     state: 'california',
//     region: 'West' },
//   { city: 'Miami',
//     temperature: ' 112 °F',
//     state: 'Florida',
//     region: 'South' },
//   { city: 'New York City',
//     temperature: ' 0 °F',
//     state: 'new york',
//     region: 'North East' },
//   { city: 'Juneau',
//     temperature: ' 21° F',
//     state: 'Alaska',
//     region: 'West' },
//   { city: 'Boston',
//     temperature: '45 °F',
//     state: 'massachussetts',
//     region: 'North East' },
//   { city: 'Jackson',
//     temperature: ' 70°F  ',
//     state: 'mississippi',
//     region: 'South' },
//   { city: 'Utqiagvik',
//     temperature: ' -1 °F',
//     state: 'Alaska',
//     region: 'West' },
//   { city: 'Albuquerque',
//     temperature: ' 95 °F',
//     state: 'new mexico',
//     region: 'West' }
// ]) )

//['38°Celsius in Pasadena, California']
//['38°Celsius in Pasadena, California']
//38°Celsius in Los Angeles, California,28°Celsius in San Francisco, California,44°Celsius in Miami, Florida,-18°Celsius in New York City, New,York,-7°Celsius in Juneau, Alaska,7°Celsius in Boston, Massachussetts,21°Celsius in Jackson, Mississippi,-19°Celsius in Utqiagvik, Alaska,35°Celsius in Albuquerque, New,Mexico
//38°Celsius in Los Angeles, California,28°Celsius in San Francisco, California,44°Celsius in Miami, Florida,-18°Celsius in New York City, New York,-7°Celsius in Juneau, Alaska,7°Celsius in Boston, Massachussetts,21°Celsius in Jackson, Mississippi,-19°Celsius in Utqiagvik, Alaska,35°Celsius in Albuquerque, New Mexico

//
// const hasOddNumber = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !== 0){
//       return true
//     }
//   }
//   return false;
// }
// hasOddNumber([1, 2, 2, 2, 2, 2, 4])
// console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4]))
// console.log(hasOddNumber([2, 2, 2, 2, 2, 4]))


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
//
// const isEqual2 = (firstObj, secondObj) => {
//   if(JSON.stringify(firstObj) === JSON.stringify(secondObj)){
//     return true
//   }else {
//     return false
//   }
// };


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

// function invert(obj) {
//     for (const [key, value] of Object.entries(obj[i])) {
//       obj.set
//   }
// }
// function invert(obj) {
//   let invertObject = {}
//   for (const [key, value] of Object.entries(obj)) {
//     invertObject[value] = key
//   }
//   return invertObject
// }
//
// console.log(invert({ test: 1 }));

// const zip = (...arguments) => {
//   let zipObj = {}
//   for (let i = 0; i < arguments.length; i++) {
//     for (const [key, value] of Object.entries(arguments[i])) {
//           if(!Object.keys(zipObj).includes(key)){
//             zipObj[key] = value
//           }
//     }
//   }
//   return zipObj
// }
//
// const objects = [
//   { foo: 5, bar: 6 },
//   { foo: 13, baz: -1 }, // foo - повторяющийся ключ
// ];
//
// console.log(zip(...objects)); // { foo: 5, bar: 6, baz: -1 }
//
// function job() {
//   return new Promise(function(resolve, reject) {
//
//     setTimeout(resolve, 2000);
//
//   }).then(() => "hello world");
//
// }
//
// console.log(job())
//
//
// const job = (data) => {
//   if(!Number.isInteger(data)){
//     return new Promise((resolve, reject) => {
//       reject(new Error())
//     }).catch(() => new Error())
//   } else if (data % 2 !== 0){
//     return new Promise(function(resolve, reject) {
//
//       setTimeout(resolve, 1000);
//
//     }).then(() => "odd");
//
//   }else {
//     return new Promise(function(resolve, reject) {
//
//       setTimeout(resolve, 2000);
//
//     }).then(() => "even");
//   }
//
//
// }
//
// console.log(job(2))

//
// const solution = () => {
//   for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 10);
//   }
// };
//
// console.log(solution())

// const addAsync = (a, b) => {
//   if(!Number.isInteger(a) || !Number.isInteger(b)){
//     return new Promise(function(resolve, reject) {
//       reject(new Error("Must provide two parameters"))
//     })
//   }else {
//     return new Promise(function(resolve, reject) {
//       resolve(a + b)
//     })
//   }
//   }
//
// addAsync(1, 2).then((res) => console.log(res)); // 3
// addAsync(undefined, 2).catch((e) => console.log(e.message));
