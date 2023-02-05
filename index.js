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
//using for loop
for (let i = 0; i < myObj.people.length; i++) {    
    console.log(myObj.people[i].firstName + " " + myObj.people[i].lastName);   
}
//using for each and function
myObj.people.forEach(function (item) {
    console.log(item.firstName + " " + item.lastName);
})
//using fir in loop
for (let prop in myObj.people) {
    console.log(prop);
    console.log(myObj.people[prop].firstName + " " + myObj.people[prop].lastName);
}
console.log(Object.keys(myObj));
console.log(Object.entries(myObj));
console.log(Object.entries(myObj)[0]);
//using map and fuction
const myObj2 = myObj.people.map(function (key, index) {
    console.log(key, index);
    return key;
});
console.log(myObj2);
