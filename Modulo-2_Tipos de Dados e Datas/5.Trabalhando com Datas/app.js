const data = new Date("2010-03-15 14:00:00.000 -0300");

console.log(data);
console.log(data.toDateString());
console.log(data.toISOString());
console.log(data.toLocaleTimeString());
console.log(data.toLocaleDateString());

console.log(data.getTime());
console.log(data.getDay());
console.log(data.getMonth());
console.log(data.getFullYear() + "\n");

//Como constuir objetos Date();

const data1 = new Date(1980, 3, 13);
console.log(data1);

const data2 = new Date(1980, 3, 13, 30, 20, 200);
console.log(data2);

const data3 = new Date(811111111111);
console.log(data3);

