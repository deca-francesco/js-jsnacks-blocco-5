const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }


// find implicito
const studente = students.find(student => student.id === 2);
console.log(studente);



// find esplicito
const studente2 = students.find(student => {
  if (student.id === 2) {
    return true
  }
});
console.log(studente2);



// ciclo for
let studenteFor = {};
for (i = 0; i < students.length; i++) {
  const studente3 = students[i];
  if (studente3.id === 3) {
    studenteFor = studente3;
  }
}
console.log(studenteFor);
