function EvenOrOdd(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}
var numero = parseInt(prompt("Insira um número:"));
console.log("====================");
console.log(EvenOrOdd(numero));
console.log("====================");