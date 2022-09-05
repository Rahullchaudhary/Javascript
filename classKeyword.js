// 2015/es6
// class keyword
// class are fake
class CreateUser{
    constructor(firstname,lastname,email,age,address){
        console.log("constructor called")
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    about(){
        return `${this.firstname} is ${this.age} years old`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return "la la la la"
    }
    func(a){
        console.log(a);
    }
}
const user1=new CreateUser("Rahul","Chaudhary","rahul8882002@gmail.com","21","surjupur");
const user2=new CreateUser("Ritik","Chaudhary","rahul8882002@gmail.com","7","surjupur");
const user3=new CreateUser("Rohan","Chaudhary","rahul8882002@gmail.com","21","surjupur");
// console.log(Object.getPrototypeOf(user1))
user1.func("Rahul");