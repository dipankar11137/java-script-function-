var i = 0;

while (i < 10) {
    if (i == 4) {
        break;
    }
    console.log(i);
    i++
}

for (i = 0; i <= 20; i++) {
    console.log(i);
    if (i > 6) {
        break;
    }
}
// break
var numbers = [12, 45, 67, 89, 44, 55, 66, 77788, 32];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        break;
    }
    console.log(number);
}

// continue
var numbers = [12, 45, 67, 89, 44, 55, 66, 77788, 32];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}