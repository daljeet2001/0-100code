"use strict";
// function hello(firstname:string){
//     console.log(`Hello ${firstname}`)
// }
// hello("daljeet");
// function sum(a:number,b:number):number{
//    return(a+b)
// }
// let a:number=sum(2,6);
// console.log(a);
// function legal(age:number):boolean{
//     if(age>18){
//         return true;
//     }
//     return false
// }
// let a:boolean=legal(5)
// console.log(a);
// function runafter5s(fn:()=>void){
//     setTimeout(fn,5000);
// }
// runafter5s(()=>console.log("hello"));
// interface User{                             
//     age:number,
//     name:String
// }
// interface Person {                                 interfaces can be extend in a class
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }
// class Employee implements Person {
//     name: string;
//     age: number;
//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }
//OR YOU CAN USE TYPE
// type User={
//     age:number | string,                      types allow us to do union of types but interface dont
//     name:string
// }
// type Employee = {                             types allow us to do intersection of types but interface dont
//     name: string;
//     startDate: Date;
//   };
//   type Manager = {
//     name: string;
//     department: string;
//   };
//   type TeamLead = Employee & Manager;
//   const teamLead: TeamLead = {
//     name: "harkirat",
//     startDate: new Date(),
//     department: "Software developer"
//   };
// const user={
//     age:12,
//     name:"Daljeet Singh"
// }
// function isLegal(user:User){
//     if(user.age>18){
//         return true;
//     }
//     return false;
// }
// if(isLegal(user)){
//     console.log("yay")
// }else{
//     console.log("oh no")
// }
//Arrays
// function maximum(arr:number[]){
//     let max=0;
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max;
// }
// let ans=maximum([5,7,9,1]);
// console.log(ans);
//Enums
// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }
// function doSomething(keypress:Direction){
//     //logic
//     console.log(keypress)
// }
// doSomething(Direction.Up)
//Generics
function a(arg) {
    return arg;
}
let ans = a("daljeer");
console.log(ans.toUpperCase());
console.log(a(3));
