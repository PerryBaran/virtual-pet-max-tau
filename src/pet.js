function Pet (name) {
    this.name = name
};

const pet = new Pet ('Fido');

module.exports = {
    Pet,
    pet
};