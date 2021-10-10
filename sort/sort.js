console.log('Hello world from HTML')

let items = [
    { name: 'Duc', age: 20 },
    { name: 'Tuyen', age: 21 },
    { name: 'Tuyet', age: 10 },
    { name: 'Nam', age: 12 },
    { name: 'Ngoc', age: 30 },
    { name: 'Anh', age: 18 }
];

// sort by value
items.sort(function (a, b) {
    return a.age - b.age;
}
);
console.log(items)