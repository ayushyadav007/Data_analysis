let firstName;
let lastName;
let age;

let arr = [{
    firstName:"Tirth", lastName:"shah", age:23}, 
{firstName:"Abhishek", lastName:"pathak", age:25}, 
{firstName:"Riya", lastName:"patel", age:24}, 
{firstName:"Bhala", lastName:"batuk", age:18},
{firstName:"Khalnayak", lastName:"Kalia", age:24}
];
let len = arr.length;
for(let i = 0;i<len;i++){
    if(arr[i].age>=24){
        console.log(arr[i].firstName +" "+ arr[i].lastName)
    }
}