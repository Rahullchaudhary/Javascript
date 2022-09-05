const users=[{id:12,name:"Rahul",age:20},{id:32,name:"Ayush",age:9},{id:24,name:"anurag",age:7}]
// console.log(users)
// for(let user of users){
//     console.log(user.id);
// }

//nested destructuring

// const [user1,user2,user3]=users;
// console.log(user1)

// const [{name},,{age}]=users;
//  console.log(age)

const [{name:firstName,id},,{age}]=users;
 console.log(firstName)
 console.log(id)