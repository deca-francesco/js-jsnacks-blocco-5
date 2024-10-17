const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// map
const numbersPlus1 = numbers.map(number => number + 1);
// const numbersPlus1 = numbers.map(number => ++number);    così fa la stessa cosa di + 1.  number++ prima legge number e poi lo incrementa
console.log(numbersPlus1);


// ciclo for
const numbersPlus1For = [];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    numbersPlus1For.push(number + 1);
}
console.log(numbersPlus1For);
