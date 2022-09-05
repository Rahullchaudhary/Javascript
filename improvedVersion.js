const userMethod={
    about:function(){
        return `${this.firstname} is ${this.age} years old`
    },
    is18:function(){
        return this.age>=18;
    }
}
function createuser(firstname,lastname,email,age,address){
    const user=Object.create(userMethod);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    // user.about=userMethod.about;
    // user.is18=userMethod.is18;
    return user;
}
const user1=createuser("Rahul","Chaudhary","rahul8882002@gmail.com","21","surjupur");
const user2=createuser("Ritik","Chaudhary","rahul8882002@gmail.com","21","surjupur");
const user3=createuser("Rohan","Chaudhary","rahul8882002@gmail.com","21","surjupur");
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
