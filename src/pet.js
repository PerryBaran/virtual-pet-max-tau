const MAXIMUM_FITNESS = 10;
const AGE_AT_BIRTH = 0;
const NOT_HUNGRY = 0;
const isDeadError = new Error('Sorry, your pet has gone to live on the big farm in the sky');

function Pet(name) {
    this.name = name,
    this.age = AGE_AT_BIRTH,
    this.hunger = NOT_HUNGRY,
    this.fitness = MAXIMUM_FITNESS
};

Pet.prototype = {
    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30
    },
    growUp() {
        if (!this.isAlive) {
            throw isDeadError
        }
        this.age += 1,
        this.hunger += 5,
        this.fitness -= 3
    },
    walk() {
        if (!this.isAlive) {
            throw isDeadError
        }
        return ((this.fitness + 4) <= 10) ? this.fitness += 4 : this.fitness = MAXIMUM_FITNESS
    },
    feed() {
        if (!this.isAlive) {
            throw isDeadError
        }
        return ((this.hunger - 3) >= 0) ? this.hunger -= 3 : this.hunger = NOT_HUNGRY
    },    
    checkUp() {
        const isHungry = (this.hunger >= 5);
        const needsWalk = (this.fitness <= 3);

        if (!this.isAlive) {
            throw isDeadError
        }
        return (isHungry && needsWalk) ? 'I am hungry AND I need a walk'
        : needsWalk ? 'I need a walk'
        : isHungry ? 'I am hungry'
        : 'I feel great!'
    }
};

module.exports = Pet;