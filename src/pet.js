const MAXIMUM_FITNESS = 10;
const AGE_AT_BIRTH = 0;
const NOT_HUNGRY = 0;

function Pet(name) {
    this.name = name,
    this.age = AGE_AT_BIRTH,
    this.hunger = NOT_HUNGRY,
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
    },
    feed() {
        if ((this.hunger - 3) >= 0) {
            this.hunger -= 3;
        } else {
            this.hunger = NOT_HUNGRY;
        }
    }    
};

module.exports = Pet;