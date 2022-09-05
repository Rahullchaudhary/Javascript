class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}
// const animal=new Animal("tom",2);
// console.log(animal);
// console.log(animal.eat());
// console.log(animal.isSuperCute());
// console.log(animal.isCute());
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
    run(){
        return `${this.name} is running at ${this.speed} kmph`;
    }
}
const tommy=new Dog("tommy",3,34);
console.log(tommy.eat());
console.log(tommy.isSuperCute());
 console.log(tommy.run());