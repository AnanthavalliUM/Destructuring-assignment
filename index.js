//Example1 --> Basic variable assignment
const animals = ["Tiger", "Lion", "Elephant"];
const [a, b, c] = animals;
console.log(`a: ${a}, b: ${b}, c: ${c}`);

//Example2 --> When more variables are defined than the length of array, other variables be left as undefined.
const products = ["Apple iphone 15", "Rolex", "Apple MacBook Air"];
const [mobile, watch, laptop, Earbuds ] = products;
console.log(`Mobile: ${mobile}, Watch: ${watch}, Laptop: ${laptop}, Earbuds: ${Earbuds}`); //Earbuds is undefined as there are no values present in the products array.

//Example3 --> using rest operator
const [phone, ...others] = products;
console.log(`Phone: ${phone}, Others: ${others}`);

//Example4 --> Combined array and object destructuring
const props = [
    { id: 1, name: "Rani" },
    { id: 2, name: "Vijaya" },
    { id: 3, name: "saranya" },
  ];
const [, , { name }] = props;  //as the first two element is left empty only Saranya will be printed
console.log(`Name: ${name}`);

//Example5 --> Computed object property names and destructuring
const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"