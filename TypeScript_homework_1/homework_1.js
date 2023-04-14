var peopleArray = [
    { name: "Samantha", age: 35, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Jane", age: 22, gender: "female" },
    { name: "John", age: 26, gender: "male" }
];
var filterByProperty = function (people, property, value) {
    return people.filter(function (person) { return person[property] === value; });
};
var filteredMales = filterByProperty(peopleArray, "gender", "male");
console.log(filteredMales);
var filteredAge30 = filterByProperty(peopleArray, "age", 30);
console.log(filteredAge30);
