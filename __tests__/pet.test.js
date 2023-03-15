const { describe } = require('node:test');
const {
    Pet
 } = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('Pet has a name property', () => {
    it('returns the name of the specified pet', () => {
        const pet = new Pet ('Fido');

        expect(pet.name).toEqual('Fido');
    });
});