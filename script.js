// Impares del 1 al 20
for(let i=1;i<21;i++){
    if(i%2!==0){
        console.log(i);
    }
}
console.log("-------------");
// Múltiplos de 3
for(let i=100;i>=0;i--){
    if(i%3==0){
        console.log(i);
    }
}
console.log("-------------");
// Restar en 1.5
for(let i=4;i>-4;i-=1.5){
    console.log(i);
}
console.log("-------------");
// Sumar del 1 al 100
let sum=0;
for(let i=1;i<101;i++){
    sum += i;
}
console.log(sum);
console.log("-------------");
// Factorial de 12
let product=1;
for(let i=1;i<13;i++){
    product*= i;
}
console.log(product);