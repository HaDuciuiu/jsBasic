//filter trả về nhiều phần tử , find trả về một phần tử duy nhất
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [
    { name: 'Duc', age: 20 },
    { name: 'Ngoc', age: 30 },
    { name: 'Lan', age: 25 },
    { name: 'Dung', age: 18 },
    { name: 'Lam', age: 25 }
]

// let filter = arr.filter((item, index) => {
//     // console.log(`check filter >>> item : `, item, 'idex : ', index)
//     return item && item.age > 20;
// })

// console.log(filter);

let find = arr.find((item , index) =>{
    return item && item.age > 20;
})

console.log(find);