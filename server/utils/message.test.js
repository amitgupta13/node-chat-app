const expect = require('expect');

const {generateMessage} = require('./message');

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