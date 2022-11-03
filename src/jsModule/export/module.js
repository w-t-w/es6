export let number = 100;
export var name = 'wtw';
export const drink = 'water';

export function count() {
    number++;
}

function sum() {
    number = number + 2;
}

export {sum as default};