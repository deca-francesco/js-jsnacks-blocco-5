const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// map
const authors = posts.map(post => post.author);
console.log(authors);


// map esplicito
const authors2 = posts.map(post => {
  return post.author;
})
console.log(authors2);




// ciclo for
const authorsFor = [];
for (let i = 0; i < posts.length; i++) {
  const author = posts[i].author;
  authorsFor.push(author);
}
console.log(authorsFor);
