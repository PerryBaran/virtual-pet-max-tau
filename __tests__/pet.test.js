const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('Pet has a name property', () => {
    it('returns the name of the specified pet', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
});

describe('aging', () => {
    it('Has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toBe(0);
    })

    it('causes the pet to age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();

        expect(pet.age).toEqual(2);
    });
});

describe('hunger', () => {
    it('Has an initial hunger value of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    it('growUp increases hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });
});

describe('fitness', () => {
    it('Has an initial fitness value of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });

    it('growUp decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});