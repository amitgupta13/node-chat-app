const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generate message', ()=>{
    it('should generate the correct message object', ()=>{
        const res = generateMessage('amit', 'Hi');

        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({
            from:'amit',
            text:'Hi'
        });
    })
});

describe('generateLocationMessage',()=>{
    it('should return the correct location', ()=>{
        const res = generateLocationMessage('amit1', 1, 1);
            expect(res.createdAt).toBeA('number');
            expect(res).toInclude({
                from:'amit1',
                url:'https://www.google.com/maps?q=1,1'
            });
    })
})