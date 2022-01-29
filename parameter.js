function bringSingara(taka) {
    console.log('Singara ar janno deca', taka);
    console.log('Mama singara den');

    var singaraPrice = 5;
    var singaraQuentity = taka / singaraPrice;
    return singaraQuentity;

}
var money = 300;
var singara = bringSingara(money);
console.log('aii nan singara', singara);

