// imports data.json file
import data from './data.json' 

// list of all categories
// const allCategories = data.map((item) => {
//   return item.category
// })
const allCategories = data.map(item => item.category)
// remove all duplicates - get only unique values
// make a new set from the array - all values in new set will be unique
const categoriesSet = new Set(allCategories)
// console.log(categoriesSet)
// make an array from a set with Array.from()
const uniqueCategories = Array.from(categoriesSet)
// console.log(uniqueCategories)

// make a histogram- Object whose keys are the names of categories and whose
// values are the number of times that category appears in the data
const categoriesWithCounts = allCategories.reduce((obj, cat) => {
  // check if cat exists as a key on obj
  if ( obj[cat] !== undefined ) {
    // if so add 
    // 1 to the value of this key
    obj[cat] += 1
  }else {
    // else 
    // set this key with a value of 1
    obj[cat] = 1
  }
  return obj
}, {}) // !!! Be sure to define the initial value as an Object!
console.log(categoriesWithCounts)

// make an array of objects that have a name and a count - reduce to an array
const arrayWithCounts = allCategories.reduce((acc, cat) => {
 acc.push({ name: cat, count:categoriesWithCounts[cat] })
 return acc
}, []) 
console.log(arrayWithCounts)


export {
  allCategories,
  uniqueCategories,
  categoriesWithCounts,
  arrayWithCounts
} 

// export the native JS array
export default data;