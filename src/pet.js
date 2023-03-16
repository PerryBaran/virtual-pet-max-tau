const MAXIMUM_FITNESS = 10;
const AGE_AT_BIRTH = 0;
const TUMMY_FULL = 0;

function Pet(name) {
    this.name = name,
    this.age = AGE_AT_BIRTH,
    this.hunger = TUMMY_FULL,
    this.fitness = MAXIMUM_FITNESS
};

Pet.prototype = {
    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30
    },
    growUp() {
        if (!this.isAlive) {
            throw new Error('Sorry, your pet has gone to live on the big farm in the sky'
            );
        }
        this.age += 1,
        this.hunger += 5,
        this.fitness -= 3
    },
    walk() {
        if (!this.isAlive) {
            throw new Error('Sorry, your pet has gone to live on the big farm in the sky'
            );
        }
        if ((this.fitness + 4) <= 10) {
            this.fitness += 4;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    },
    feed() {
        if (!this.isAlive) {
            throw new Error('Sorry, your pet has gone to live on the big farm in the sky'
            );
        }
        if ((this.hunger - 3) >= 0) {
            this.hunger -= 3;
        } else {
            this.hunger = TUMMY_FULL;
        }
    },    
    checkUp() {
        const isHungry = (this.hunger >= 5);
        const needsWalk = (this.fitness <= 3);

        if (!this.isAlive) {
            throw new Error('Sorry, your pet has gone to live on the big farm in the sky'
            );
        }
        if (isHungry && needsWalk) {
            return 'I am hungry AND I need a walk'
        }
        else if (needsWalk) {
            return 'I need a walk'
        }
        else if (isHungry) {
            return 'I am hungry'
        }
        else {
            return 'I feel great!'
        }
    }
};

module.exports = Pet;