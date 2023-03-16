// Your 'red' and 'blue' are elements of the set. Or we can say set members.

const mySet1 = new Set(['red', 'blue']);
const mySet2 = new Set(['b', 'c', 's']);


function cartesian_product(set1, set2){
    const ret_value = new Set();

    for (const item1 of set1) {
        for(const item2 of set2) {
            ret_value.add([item1, item2])
        }
    }    

    return ret_value
}

result1 = cartesian_product(mySet1, mySet2)

result2 = cartesian_product(mySet2, mySet1)

console.log(result1)
console.log(result2)
console.log(result1 == result2)




const mySet3 = new Set(['DL', 'MP', 'KA'])
const mySet4 = new Set(['01', '02', '03'])

console.log(cartesian_product(mySet3, mySet4))



