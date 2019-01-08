// class Person {
//    constructor(name, age){
//     this.name = name;
//     this.age = age;
//    }

//    getUserDescription(){
//        return `${this.name} is ${this.age} year(s) old`
//    }
// }

// const a = new Person('abc', 21)
// const b = new Person('abcd', 21)

// console.log(a.name, b.age);

// console.log(b.getUserDescription());

class Users {
    constructor(){
        this.users = [];
    }

    addUser(id, name, room){
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
}

module.exports = {
    Users
}