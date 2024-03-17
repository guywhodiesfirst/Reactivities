interface Creature {
    name: string;
    number_of_legs: number;
    make_sound: () => void;
}

let duck: Creature = {
    name: 'duck',
    number_of_legs: 2,
    make_sound: function() {
        console.log('quack');
    }
};

let dog: Creature = {
    name: 'dog',
    number_of_legs: 4,
    make_sound: function() {
        console.log('woof')
    }
}

export const creatures = [duck, dog]
export type {Creature}