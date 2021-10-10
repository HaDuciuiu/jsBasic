let text = "This is a check for js method"

let text_split = text.split(' ');
console.log("This is my check for js method split")
console.log(text_split);
const input = 'john smith-123 Street-Apt 4-New York-NY-12345';

const [name, street, ...others] = input.split('-');

console.log(name); // john smith
console.log(street); // 123 Street
console.log(others); // ["Apt 4", "New York", "NY", "12345"]
