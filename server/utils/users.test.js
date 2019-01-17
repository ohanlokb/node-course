let expect = require('expect');
let {Users} = require('./users');

describe('Users', ()=>{
    let users;
    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Dave',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Wendy',
            room: 'Node Course'
        }];
    });

    it('should add new user', ()=>{
        let users = new Users();
        let user = {
            id: '1',
            name: 'Kevin',
            room: 'Node Course'
        }
        let resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toMatchObject([user]);
    });

    it('should remove a user', ()=> {
        let userId = '1';
        let user = users.removeUser(userId);
        expect(user).not.toBeNull();
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', ()=> {
        let user = users.removeUser('10');
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', ()=> {
        let userId = '1';
        let user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find a user', ()=> {
        let user = users.getUser('10');
        expect(user).toBeFalsy();
    });

    it('should returns names for node course', ()=>{
        let userList = users.getUserList('Node Course');
        expect(userList).toMatchObject(['Mike', 'Wendy']);
    })

    it('should returns names for react course', ()=>{
        let userList = users.getUserList('React Course');
        expect(userList).toMatchObject(['Dave']);
    })
});