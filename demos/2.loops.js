// Array of objects
const people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 25 },
]

for (let person of people){
    console.log(`hello ${person.name}, you are ${person.age}`)
}