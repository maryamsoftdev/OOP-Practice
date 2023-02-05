var myObj = {    
    "people": [      {        
        "firstName": "Mike"
        ,         "lastName": "Smith"
        ,         "age": 30      
    },        {        
        "firstName": "John"
        ,         "lastName": "Jones"
        ,         "age": 40      
    }]
    ,     "places": [      {        
        "location": "Toronto"
        ,         "lat": 87
        ,         "long": 140      
    },        {        
        "location": "New York"
        ,         "lat": 67
        ,         "long": 110      
    }]  
};  
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

myObj.places.forEach(function(item){

    console.log(item.age);
    //for test purpose
    // myObj.places.forEach(function(item){
        
        //     console.log(item);
        // })
        //adding html and retrieving data from object and displaying them in html
        let div = document.createElement('div')
        div.innerHTML=`<h3>${item.location}`;
        console.log(div);
        document.querySelector('div').appendChild(div);
    })
