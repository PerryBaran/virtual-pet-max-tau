const MAXIMUM_FITNESS = 10;
const AGE_AT_BIRTH = 0;
const HUNGER_AT_BIRTH = 0;

function Pet(name) {
    this.name = name,
    this.age = AGE_AT_BIRTH,
    this.hunger = HUNGER_AT_BIRTH,
    this.fitness = MAXIMUM_FITNESS
};

Pet.prototype = {
    growUp() {
        this.age += 1,
        this.hunger += 5,
        this.fitness -= 3
    },
    walk() {
        if ((this.fitness + 4) <= 10) {
            this.fitness += 4;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    }
};

module.exports = Pet;