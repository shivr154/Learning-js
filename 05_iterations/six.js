// const coding = ["js","ruby","java","python","cpp"]
// for each loop dnt return any value - undefined

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )


// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9,10]
// Filter , it returns value but ,for each dnt return value 
// in Filter have to pass iterator and condition

// const newNums = myNums.filter( (item) => item > 4 )

// const newNums = myNums.filter( (num) => {
//       return num > 4
// } ) // have to return explicitly when used {}

// console.log(newNums);

const newNums = []

myNums.forEach( (num) => {
      if(num > 4){
         newNums.push(num)
      }
} )

// console.log(newNums); // both does the same thing


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (bk) => bk.genre === 'History' )

  const userBooks1 = books.filter( (bk) => {
    return bk.publish > 2000
  } )

  const userBooks2 = books.filter( (bk) => {
    return bk.publish >= 1980 && bk.genre === "Non-Fiction"
  } )

 console.log(userBooks);
 console.log(userBooks1);
 console.log(userBooks2);



