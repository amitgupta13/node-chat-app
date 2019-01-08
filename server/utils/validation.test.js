const expect = require('expect');
const { isRealString } = require('./validation');

describe('validationTest', ()=>{
    it('should reject non-string values', ()=>{
        const res = isRealString(123);
        
        expect(res).toBe(false);
    })

    it('should reject string with only spaces', ()=>{
        const res = isRealString('   ');

        expect(res).toBe(false);
    })

    it('should allow string values', ()=>{
        const res = isRealString('123');
        
        expect(res).toBe(true);
    })
})