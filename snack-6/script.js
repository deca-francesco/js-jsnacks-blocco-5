const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.
console.log(zucchine);



// filter arrow function implicita
const zucchineLunghe = zucchine.filter(zucchina => zucchina.length > 15);
console.log(zucchineLunghe);

// filter arrow function esplicita
const altreZucchine = zucchine.filter(zucchina => {
  if (zucchina.length < 15) {
    return true;
  }
});

console.log(altreZucchine);


// ciclo for
const altreZucchine2 = [];
for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];
  if (zucchina.length < 15) {
    altreZucchine2.push(zucchina);
  }
}
console.log(altreZucchine2);
