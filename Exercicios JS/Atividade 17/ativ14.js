var numero1, numero2, resto, resultado;

numero1 = 10
numero2 = 40

resto = numero1 % numero2
resultado = numero1 / numero2

if (numero2 == 0) {
    console.log ("Impossivel fazer está divisão")
} else {
    console.log ("O quociente é:", resultado, "O resto é:", resto)
}