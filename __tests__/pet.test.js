const { describe } = require('node:test');
const {
    Pet,
    pet
 } = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('Pet has a name property', () => {
    it('returns the name of the specified pet', () => {
        expect(pet.name).toEqual('Fido');
    });
});