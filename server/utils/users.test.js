const expect = require('expect');
const {Users} = require('./users');

describe('Users',()=>{
    it('it should add new User', ()=>{
        const users = new Users();

        const user = {
            id:123,
            name:'abc',
            room:'A'
        }
    
        const res = users.addUser(user.id, user.name, user.room);
    
        expect(users.users).toEqual([user]);
    })
});