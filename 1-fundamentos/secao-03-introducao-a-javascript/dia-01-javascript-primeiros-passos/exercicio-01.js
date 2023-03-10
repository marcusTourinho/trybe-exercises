let salarioBruto = 3000, salarioLiquido = 0, INSS = 0, IR = 0, tristeza = 0;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;
    salarioLiquido = salarioBruto - INSS;
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.62) {
    INSS = salarioBruto * 0.09;
    salarioLiquido = salarioBruto - INSS;
} else if(salarioBruto >= 2594.63 && salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11;
    salarioLiquido = salarioBruto - INSS;
} else {
    INSS = 570.88;
    salarioLiquido = salarioBruto - INSS;
}

console.log(salarioLiquido);

if (salarioLiquido <= 1903.98) {
    IR = 'Isento'
} else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
    IR = salarioLiquido * 0.075;
    tristeza = salarioLiquido - IR + 142.80;
} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    IR = salarioLiquido * 0.15;
    tristeza = salarioLiquido - IR + 354.80;
} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    IR = salarioLiquido * 0.225;
    tristeza = salarioLiquido - IR + 636.13;
} else {
    IR = salarioLiquido * 0.275;
    tristeza = salarioLiquido - IR + 869.36;
}
console.log(IR);
console.log(tristeza);