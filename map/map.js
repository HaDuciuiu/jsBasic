let arr = [1 , 2 , 3 , 4 , 5]

// for (let i = 0 ; i < arr.length ;i++)
// {
//     arr[i] *= arr[i];
// }

let mapArr = arr.map((item , index) =>{
    return item * item;
})
console.log('check value of : ',arr);
console.log('check value of mapARR : ',mapArr);