let str_phone = "097681512a";

let patterns = new RegExp("[0-9]{10}[0-9]?","i");

console.log(patterns.test(str_phone));