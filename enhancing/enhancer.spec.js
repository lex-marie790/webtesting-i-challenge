const {success, fail, repair, get} = require('./enhancer.js');
// test away!
const swords = {
    name: 'sword',
    durability: 50,
    enhancement: 15,
};

const axes = {
    name: 'axe',
    durability: 100,
    enhancement: 20,
};

const wands = {
    name: 'wand',
    durability: 10,
    enhancement: 20,
};

const lance = {
    name: 'axe',
    durability: 5,
    enhancement: 5,
};

// test run
describe('enhancer methods', function() {
    it("should run tests", function () {
         //initial dummy tests
         expect(true).toBe(true);
         expect(true).toBeTruthy();
         expect(true).not.toBeUndefined();
     });
})

// start tests
// repair test
describe('enhancer methods', () => {
    describe('repair function', () => {
        it('returns item with 100 durability', () => {
            expect(repair(swords)).toEqual({
                ...swords,
                durability: 100
           })
        })
    })
})
