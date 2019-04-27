
let name1 = prompt ("What is name #1?");
let name2 = prompt ("What is name #2?");
let name3 = prompt ("What is name #3?");



//Check if all are equal
if (name1.length === name2.length && name1.length === name3.length){
    console.log(`All three names, ${name1}, ${name2}, ${name3}, are the same length.`)
}

/*if name1 is longer than name2
  compare name1 to name3
  if name1 is longer then print out name 1
  else if name3 is longer then print out name 3
  else print that name1 & name3 are tied
*/
if (name1.length > name2.length){
    if (name1.length > name3.length){
       console.log(`${name1} has the longest name.`)
    }else if (name1.length < name3.legth) {
        console.log(`${name3} has the longest name.`)
    } else{
        console.log(`${name1} and ${name3} tie for the longest name.`)
    }
}

/* if name2 is longer than name1
  compare name2 to name3
  if name2 is longer then print out name 2
  else if name3 is longer then print out name3
  else print that name2 & name3 are tied 
*/
if (name2.length > name1.length){
    if (name2.length > name3.length){
       console.log(`${name2} has the longest name.`)
    }else if (name2.length < name3.legth) {
        console.log(`${name3} has the longest name.`)
    } else{
        console.log(`${name2} and ${name3} tie for the longest name.`)
    }
}
//Check if name 3 is one of the longest
if (name3.length > name1.length){
    if (name3.length > name2.length){
       console.log(`${name3} has the longest name.`)
    }
}

//Print name1 & name2 if they are tied
if (name1.length === name2.length && name1.length > name3.length) {
    console.log(`${name1} and ${name2} tie for the longest name.`)
}