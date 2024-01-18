// Reduce used to add or sum 
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, initialValue,);

// console.log(sumWithInitial);
// // Expected output: 10

// In first iteration reduce take value from initialvalue and from next iterations it accumulate value of accumulator + currentValue

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//      return acc + currVal
// },0)

const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },
    {
        itemName:"data science course",
        price: 15999
    },
]

const cartTotal = shoppingCart.reduce( (acc,item) => acc + item.price, 0 )

console.log(cartTotal);



