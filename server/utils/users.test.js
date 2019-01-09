const expect = require('expect');
const {Users} = require('./users');

describe('Users',()=>{

    let users;

    beforeEach(()=>{
        users = new Users();
        users.users = [
            {
                id:'1',
                name:'Mike',
                room:'Node Course'
            }, {
                id:'2',
                name:'Jen',
                room:'React Course'
            }, {
                id:'3',
                name:'Julie',
                room:'Node Course'
            },
        ]
    })

    it('it should add new User', ()=>{
        const users = new Users();

        const user = {
            id:123,
            name:'abc',
            room:'A'
        }
    
        users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    })

    it('should return names for node course', ()=>{
        const userList = users.getUserList('Node Course');
        
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for React course', ()=>{
        const userList = users.getUserList('React Course');
        
        expect(userList).toEqual(['Jen']);
    });

    it('should find a user', ()=>{
        var userId = '2'
        const user = users.getUser(userId);

        expect(user.id).toBe(userId);
    })

    it('should not find a user', ()=>{
        var userId = '4'
        const user = users.getUser(userId);

        expect(user).toNotExist();
    })

    it('should remove a user', ()=>{
        var userId = '2'
        const user = users.removeUser(userId);
        
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    })

    it('should not remove a user', ()=>{
        var userId = '4'
        const user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    })
});