var num1, num2, num3, resul, soma;

num1 = 7;
num2 = 4;
num3 = 6;

soma = num1+num2+num3;
media = soma/3;

if (media >= 7 ){
    console.log("Sua média é:", media, "você está Aprovado")
} else if (resul < 7 && resul >= 5) {
    console.log("Sua média é:", media, "você está de Recuperação")
} else {
    console.log("Sua média é:", media, "você está Reprovado")
}