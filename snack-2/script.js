const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// ciclo for in
for (const key in people) {
  const person = people[key];
  console.log(person.name);
}

// for each
people.forEach(person => console.log(person.name));


// Map + join
console.log(people.map(person => person.name).join());
