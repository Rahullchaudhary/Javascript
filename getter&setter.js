class person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    get fullName(){
        return `${this.firstname} ${this.lastname}`;
    }
    set fullName(fullName){
        const [firstname,lastname]=fullName.split(" ");
        this.firstname=firstname;
        this.lastname=lastname;
    }
    // setName(firstname,lastname){
    //     this.firstname=firstname;
    //     this.lastname=lastname;
    // }
}
const person1=new person("Rahul","chaudhry",21);

person1.fullName="mohit verma";
console.log(person1);
// console.log(person1.firstname);
// console.log(person1.lastname);
// person1.setName("Ravi","Verma");
// person1.firstname="Ravi";
// person1.lastname="verma";
// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1.fullName);