const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('Pet has a name property', () => {
    it('returns the name of the specified pet', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toBe('Fido');
    });
});

describe('growUp', () => {
    it('Has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toBe(0);
    })

    it('causes the pet to age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();

        expect(pet.age).toBe(2);
    });

    it('Throws an error if pet is dead', () => {
        const pet = new Pet('Fido');
        pet.age = 30;

        expect(() => pet.growUp()).toThrow(
            'Sorry, your pet has gone to live on the big farm in the sky'
            );
    });
});

describe('hunger', () => {
    it('Has an initial hunger value of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toBe(0);
    });

    it('growUp increases hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.hunger).toBe(5);
    });
});

describe('fitness', () => {
    it('Has an initial fitness value of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toBe(10);
    });

    it('growUp decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.fitness).toBe(7);
    });
});

describe('walk', () => {
    it('increases fitness value by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toBe(8);
        pet.walk();

        expect(pet.fitness).toBe(10);
    });

    it('Throws an error if pet is dead', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;

        expect(() => pet.walk()).toThrow(
            'Sorry, your pet has gone to live on the big farm in the sky'
            );
    });
});

describe('feed', () => {
    it('decreases hunger value by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toBe(2);
        pet.feed();

        expect(pet.hunger).toBe(0);
    });

    it('Throws an error if pet is dead', () => {
        const pet = new Pet('Fido');
        pet.hunger = 10;

        expect(() => pet.feed()).toThrow(
            'Sorry, your pet has gone to live on the big farm in the sky'
            );
    });
});

describe('checkUp', () => {
    it('returns how pet is feeling', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;

        expect(pet.checkUp()).toBe('I am hungry');
        pet.hunger = 0;
        pet.fitness = 3;

        expect(pet.checkUp()).toBe('I need a walk');
        pet.hunger = 5;
        pet.fitness = 3;

        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
        pet.hunger = 0;
        pet.fitness = 10; 

        expect(pet.checkUp()).toBe('I feel great!');
    });

    it('Throws an error if pet is dead', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;

        expect(() => pet.checkUp()).toThrow(
            'Sorry, your pet has gone to live on the big farm in the sky'            );
            pet.fitness = 1;
            pet.hunger = 10;

        expect(() => pet.checkUp()).toThrow(
            'Sorry, your pet has gone to live on the big farm in the sky'            );
            pet.hunger = 9;
            pet.age = 30;

        expect(() => pet.checkUp()).toThrow(
            'Sorry, your pet has gone to live on the big farm in the sky'
            );
    });
});

describe('is alive', () => {
    it('returns if pet is alive or not', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;

        expect(pet.isAlive).toBe(false);
        pet.fitness = 2;
        pet.hunger = 10;

        expect(pet.isAlive).toBe(false);
        pet.hunger = 5;

        expect(pet.isAlive).toBe(true);
    });
});

describe('has children', () => {
    it('has a property of children', () => {
        const pet = new Pet('Fido');

        expect(pet.children).toBeInstanceOf(Array);
        
    });

    it('is able to take another instance of Pet as a child', () => {
        const pet = new Pet('Fido');
        const pooch = new Pet('Pooch');
        pet.adoptChild(pooch);

        expect(pet.children).toContain(pooch);
    });

    it('gives birth to its own child', () => {
        const pet = new Pet('Fido');
        pet.haveBaby('Cornelius');

        expect(pet.children[0]).toBeInstanceOf(Pet);
        expect(pet.children[0].name).toBe('Cornelius')
    })
});