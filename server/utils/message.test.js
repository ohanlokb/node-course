let expect = require('expect');
let {generateMessage} = require('./message');

describe('generate message', ()=>{
    it('should generate correct message object', ()=>{
        let msg = generateMessage('test', 'message');
        
        expect(msg).toBeTruthy();
        expect(msg.from).toBe('test');
        expect(msg.text).toBe('message');
        expect(typeof msg.createdAt).toBe('number');
        
    });
});