const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// filter
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);



// filter ma con funzione esplicita
const evenNums2 = nums.filter(num => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
})

console.log(evenNums2);


// ciclo for
const evenNums3 = [];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 === 0) {
        evenNums3.push(num);
    }
}
console.log(evenNums3);
