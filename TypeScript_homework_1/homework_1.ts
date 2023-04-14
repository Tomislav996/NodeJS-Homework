

interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
    //[key: string]: any;
}


const peopleArray: Person[] = [
{name:"Samantha", age:35, gender: "female"},
{name: "Bob", age: 30, gender: "male"},
{name: "Jane", age: 22, gender: "female"},
{name: "John", age: 26, gender:"male"}];


const filterByProperty = (people: Person[], property: string, value: string | number): Person[] => {
    return people.filter(person => person[property as keyof Person] === value);
}

const filteredMales = filterByProperty(peopleArray, "gender", "male");
console.log(filteredMales);

const filteredAge30 = filterByProperty(peopleArray, "age", 30);
console.log(filteredAge30);

