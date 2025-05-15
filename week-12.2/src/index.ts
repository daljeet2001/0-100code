//pick

interface User {
    name:String,
    age:number,
    email:String
}

type UserProfile= Pick <User,'name'| 'age'>


// function sumofTow(user1:User,user2:User){
//     return user1.age + user2.age
// }

// let sum=sumofTow({name:"daljeet",age:23,email:"daljeet@gmail.com"},{name:"harpreet kaur",age:45,email:"harpreet@gmail.com"})
// console.log(sum);


// function profile(profile:UserProfile){
//     console.log(`Name:${profile.name},Age:${profile.age}`);
// }

// profile({name:"daljeet",age:23})


//Partial

// type UserprofileOptional=Partial<UserProfile>

// function update(info:UserprofileOptional){
//     console.log(`name:${info.name}`);
// }

// update({name:"daljeet"})