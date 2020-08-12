const {success, fail, repair, get} = require('./enhancer.js');
// test away!
const swords = {
    name: 'sword',
    durability: 50,
    enhancement: 14,
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
    name: 'lance',
    durability: 5,
    enhancement: 5,
};

const arrow = {
    name: 'arrow',
    durability: 35,
    enhancement: 25,
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

// success test
describe('success', () => {
    it('adds enhancement less than 20', () => {
        expect(lance.enhancement).toBe(5);
        expect(success(lance)).toEqual({
            ...lance,
            enhancement:6
        });
    });
    it('enhancement full', () => {
        expect(axes.enhancement).toBe(20);
        expect(success(axes)).toEqual({
            ...axes
        });
    });
});

// fail test
describe('fail', () => {
    it('enhancement less than 15, decrease durability 5', () => {
        expect(fail(swords)).toEqual({
            ...swords,
            durability: 95,
            enhancement: 14,
        });
    });
    it('decrease durability by 10, decrease enhancement by 1', () => {
        expect(fail(arrow)).toEqual({
            ...arrow,
            durability: 25,
            enhancement: 24,
        })
    });
})
