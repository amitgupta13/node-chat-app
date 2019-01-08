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

    getUserList(room){
        let user = this.users.filter((user)=> user.room === room);
        let namesArray = user.map((user)=> user.name);

        return namesArray;
    }

    getUser(id){
        return this.users.filter((user)=>user.id === id)[0];
    }

    removeUser(id){
        let user = this.getUser(id);
        if(user){
            this.users = this.users.filter((user)=>user.id !== id);
        }

        return user;
    }
}

module.exports = {
    Users
}