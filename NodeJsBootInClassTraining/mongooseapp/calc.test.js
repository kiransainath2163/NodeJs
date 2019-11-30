const utils = require('./calc')
const assert = require('chai').assert
describe('calc test suite', () => {
    it('should return 10 a=6,b=4', () => {
        assert.equal(10, utils.add(6, 4))
    })
    it('mul should return 30 a=5,b=6', () => {
        assert.equal(30, utils.mul(5, 6))
    })
})  