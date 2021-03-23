var num1, num2, num3;

num1 = 10
num2 = 10
num3 = 10

if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    if (num1 == num2 && num2 == num3) {
        console.log ("É um triangulo Equilátero")
    } if else (num1 == num2 || num2 == num3 || num2 == num3) {
        console.log ("É um triangulo Isósceles")
    } else {
        console.log("É um triangulo Escaleno")
    }
} else {
    console.log ("As medidas não forma um triangulo")
}