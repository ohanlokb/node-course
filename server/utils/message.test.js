let expect = require('expect');
let {generateMessage,generateLocationMessage} = require('./message');

describe('generate message', ()=>{
    it('should generate correct message object', ()=>{
        let from = 'test';
        let text = 'message';
        
        let msg = generateMessage(from, text);
        console.log(msg);
        
        expect(typeof msg.createdAt).toBe('number');
        expect(msg).toMatchObject({from,text});        
    });
});

describe('generate location message', ()=>{
    it('should generate correct location message object', ()=>{
        let from = 'admin';
        let latitude = 1;
        let longitude = 2;
        let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        let msg = generateLocationMessage(from, latitude, longitude);        

        expect(typeof msg.createdAt).toBe('number');
        expect(msg).toMatchObject({from,url});        
    });
});