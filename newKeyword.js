// function createUser(firstname,age){
//     this.firstname=firstname;
//     this.age=age;
// }
// createUser.prototype.about=function(){
//     console.log(this.firstname,this.age);
// }
// const user=new createUser("Rahul",21);
// //new keyword
// //1. empty object this={}
// //2. return this
// user.about();


//impromised code
//constructor function
function Createuser(firstname,lastname,email,age,address){
    // const user=Object.create(createuser.prototype);

    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;

}
Createuser.prototype.about=function(){
    return `${this.firstname} is ${this.age} years old`;
}
Createuser.prototype.is18=function(){
             return this.age>=18;
         }


         
const user1=new Createuser("Rahul","Chaudhary","rahul8882002@gmail.com","21","surjupur");
const user2=new Createuser("Ritik","Chaudhary","rahul8882002@gmail.com","7","surjupur");
const user3=new Createuser("Rohan","Chaudhary","rahul8882002@gmail.com","21","surjupur");
 console.log(user1.about());
 console.log(user2.about());
 console.log(user3.is18());

 for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
 }