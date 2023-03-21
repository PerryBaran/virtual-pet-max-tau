# Virtual Pet
---

Hi! Virtual Pet is a Javascript pet. I'm using this project to practice object oriented programming.

## What will it do?


The Virtual Pet will be able to:

* Be given a name
* Grow older
* Get hungry
* Lose fitness
* Be taken for walks to increase its fitness
* Be fed to decrease its hunger
* Be talked to and reply if it needs feeding or walking
* Die if it becomes too unfit or too hungry
* Die of old age after a specified number of days
* Adopt a child
* Give birth to a child

## Installation


* Fork this repository
* Clone your forked repository
* Run `npm i` to download relevant dependencies and devDependencies

## How to use it

Give your pet a name by creating a new variable from the Pet constructor with your chosen name passed as the argument, e.g. `const Mog = new Pet ('Mog')`

Congratulations! Your new pet will be born with the following properties:
* name (set by you as shown above);
* age (set to 0 to begin with);
* hunger (set to 0 to begin with);
* fitness (set to 10 to begin with);
* children (an empty array to begin with)

Use the following methods to interact with your pet:
* `.growUp()` (causes the pet's age to increase by 1, hunger to increase by 5 and fitness to decrease by 3);
* `.walk()` (causes the pet's fitness to increase by 4);
* `.feed()` (causes the pet's hunger to decrease by 3);
* `.checkUp()` (allows the pet to talk to you - it will let you know if it is hungry, needs a walk, both or if it is doing just fine);
* `.adoptChild(child)` (enables your pet to adopt a child, whose name must be passed as an argument in the method);
* `.haveBaby(baby)` (causes the pet to have a baby, whose name must be passed as an argument in the method)

:warning: Your pet will have a maximum fitness and maximum hunger of 10, maximum age of 30. If your pet's fitness reaches 0, hunger reaches 10 or age reaches 30, it will pass away. :warning:

Have fun and look after your pet!