let expect = require('expect');
let {generateMessage} = require('./message');

describe('generate message', ()=>{
    it('should generate correct message object', ()=>{
        let from = 'test';
        let text = 'message';
        let msg = generateMessage(from, text);
        
        expect(typeof msg.createdAt).toBe('number');
        expect(msg).toMatchObject({from,text});        
    });
});