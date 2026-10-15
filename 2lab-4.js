'use strict';

const fn = () => {
    const constObject = {name: "Oleksandr"};
    let letObject = {name: "Mykola"};
    constObject.name = "Sanya";
    letObject.name = "Nikolya";
    console.log(constObject);
    console.log(letObject);
    letObject = {name: "New object"};
    console.log(letObject);
}
fn();
const createUser = (name, city) => {
    return {name, city};
}
console.log(createUser("Oleksandr Venom", "Roma"));
