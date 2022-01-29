var computer = {
    price: 28000,
    storage: '165gb',
    processor: 'intel i5',
    color: 'gold'
}
// console.log(computer);
console.log(computer.processor);
var coumputerPrice = computer.price;
console.log(coumputerPrice);

// set a object property value
computer.price = 2200;
// console.log(computer);

// different way of change property value
var priceProperty = 'price';
computer[priceProperty] = 23000;

computer['price'] = 24000;
// console.log(computer);


var storageProperty = 'storage';
computer[storageProperty] = 512;
console.log(computer);