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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// find implicito
const marco = students.find(student => student.name === "Marco Lanci");
console.log(`La classe di Marco è la: ${marco.class}`);

// prendo direttamente la classe in line
// const marco = students.find(student => student.name === "Marco Lanci").class;



// find esplicito
const luigi = students.find(student => {
  if (student.name === "Luigi Banzi") {
    console.log(`La classe di Luigi è la: ${student.class}`);
  }
});


// ciclo for
for (i = 0; i < students.length; i++) {
  const student = students[i];
  if (student.name === "Mario Banfi") {
    console.log(`La classe di Mario è la: ${student.class}`);
  }
}