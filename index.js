// var myObj = {    
//     "people": [      {        
//         "firstName": "Mike"
//         ,         "lastName": "Smith"
//         ,         "age": 30      
//     },        {        
//         "firstName": "John"
//         ,         "lastName": "Jones"
//         ,         "age": 40      
//     }]
//     ,     "places": [      {        
//         "location": "Toronto"
//         ,         "lat": 87
//         ,         "long": 140      
//     },        {        
//         "location": "New York"
//         ,         "lat": 67
//         ,         "long": 110      
//     }]  
// };  
//how to itterate through a object:
//using for loop
//using for each loop and fuctiin
//using map
//usingg for in prop
// //using for loop
// for (let i = 0; i < myObj.people.length; i++) {    
//     console.log(myObj.people[i].firstName + " " + myObj.people[i].lastName);   
// }
// //using for each and function
// myObj.people.forEach(function (item) {
//     console.log(item.firstName + " " + item.lastName);
// })
// //using fir in loop
// for (let prop in myObj.people) {
//     console.log(prop);
//     console.log(myObj.people[prop].firstName + " " + myObj.people[prop].lastName);
// }
// console.log(Object.keys(myObj));
// console.log(Object.entries(myObj));
// console.log(Object.entries(myObj)[0]);
// //using map and fuction
// const myObj2 = myObj.people.map(function (key, index) {
//     console.log(key, index);
//     return key;
// });
// console.log(myObj2);

// myObj.places.forEach(function(item)

// {

//     console.log(item.age);
//     //for test purpose
//     // myObj.places.forEach(function(item){
        
//         //     console.log(item);
//         // })
//         //adding html and retrieving data from object and displaying them in html
//         let div = document.createElement('div')
//         let para = document.createElement('p')
//         div.innerHTML=`<h3>${item.location}</h3>${" "}${item.long}`;
//         para.innerHTML=`<h3>${item.lat}</h3>${" "}${item.long}`;

//         //adding styles(css) through js
//         div.style.border='1px solid red';
//         div.style.display='inline-block';
//         div.style.width='100px'
//         div.style.height='100px'
//         console.log(div);
//         console.log(para);

//         document.querySelector('div').appendChild(div);
//         document.querySelector('p').appendChild(para);
//     })
// start of cart code
// const items=[
// {item:"milk", cost:"50",id:1},
// {item:"coffee", cost:"30",id:2},
// {item:"sugar", cost:"70",id:3},
// {item:"water", cost:"20",id:4},


// ];
// const cart={};
// const output = document.createElement('div');
// document.body.appendChild(output);

// items.forEach(function(ele){
//     // console.log(div)
//     let div = document.createElement('div')
//     div.innerHTML=`<h3>${ele.item}</h3>${" "}$${ele.cost}`;
//     div.style.border='1px solid black';
//     div.style.display='inline-block';
//     div.style.width='100px';
//     div.style.margin='25px';
//     div.style.padding='25px';
//     div.style.alignContent='center';
//     div.style.alignItems='center';
//     div.style.textAlign='center';
//     div.addEventListener('click',function(){
//     let namer = ele.item.toLocaleUpperCase();
//     console.log(namer);
//     if(!cart[namer]){
//     cart[namer]={
//         name:ele.item,
//         price:ele.cost,
//         qty:1,
//         subtotal:function(){
//             return this.price*this.qty
//         }
//     }}else{
//         cart[namer].qty++;
//     }
//     relist();
//     })
//     function relist(){
//    output.innerHTML="";
//    console.log(cart);
//    let total =0;
//    for(let product in cart){
//        console.log(cart[product]);
//        let subtotal= cart[product].subtotal();
//        total += subtotal; 
//        output.innerHTML +=`${cart[product].name} $${cart[product].price}X`;
//        output.innerHTML +=`${cart[product].qty} $${subtotal}X <br>`;

//    }
//    output.innerHTML +=`Total = $${total}`;

//     }
// document.querySelector('div').appendChild(div);

// })
// using onject as classes
//constaructor function
//we can use fumction to construct a object
//in classes we use function keyword and start ever later witgh uppercase(camel case)
// function BluePrint() {
//     this.stuff = "yes";
//     this.greet = "hello";
// }
// const myObj1 = new BluePrint();
// const myObj2 = new BluePrint();
//example 2
// function Person(firstName, lastName) {
//     this.first = firstName;
//     this.last = lastName
//     this.greeting = function () {
//     console.log(`Hello ${this.first} ${this.last}`)
//     };
//     }
//     const tester = new Person('Laurence', 'Svekis');
//     console.log(tester.first);
//     tester.greeting();
//CAR CONSTRUCTOR
const honda = new Car("Red", "Honda", "Accord", 45000, 2020);
const mustang = new Car("Black", "Ford", "Mustang", 50000, 1965);
 
function Car(color, brand, make, price, year) {
    this.color = color;
    this.brand = brand;
    this.make = make;
    this.price = price;
    this.year = year;
    this.wheels = 4;
    this.drive = function () {
        console.log(`I'm driving my ${this.year} ${this.brand}, vroom vroom `);
    }
    this.park = function () {
        console.log(`Parking the ${this.make}`);
    }
    this.sell = function () {
        console.log(`I want to sell my  ${this.make} for at least $${this.price*0.9} since I paid $${this.price}`);
    }
}
