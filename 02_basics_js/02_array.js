const marvel_heros =["thor", "ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // not a good practice

// console.log(marvel_heros);
// console.log(marvel_heros[4]);
// console.log(marvel_heros[3][0]);
// console.log(marvel_heros[1][2])

const allHeros = marvel_heros.concat(dc_heros) // it concat and creates a new array
// console.log(allHeros);

// spread(used this more bcz can give more input invalues)
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// use flat to solve this type of condition
const another_array = [1,2,3,[4,5,6],7,8,[4,5,[8,9]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam")); // it convert anything into Array
console.log(Array.from({name : "shivam"})); // return empty array need to define from what to make array key or value etc;

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.from(score1,score2,score3));
console.log(Array.of(score1,score2,score3));


