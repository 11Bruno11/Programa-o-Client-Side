var num1, num2, num3, maior, menor;

num1 = 10
num2 = 30
num3 = 20

if (num1 > num2 && num1 > num3){
    maior = num1
} 
else if (num2 > num1 && num2 > num3){
    maior = num2
}
else if (num3 > num1 && num3 > num2){
    maior = num3
}

if (num1 < num2 && num1 < num3){
    menor = num1
} 
else if (num2 < num1 && num2 < num3){
    menor = num2
}
else if (num3 < num1 && num3 < num2){
    menor = num3
}

console.log("O maior número é:", maior,"E o menor é:", menor)