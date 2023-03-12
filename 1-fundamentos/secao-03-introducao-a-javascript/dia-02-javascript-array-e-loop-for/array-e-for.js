let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], media = 0, maior = numbers[0], impares = 0, menor = numbers[0], novo = [], div = 0;

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    media += numbers[index];
    if (numbers[index] % 2 != 0) {
        impares ++;
    }
}
console.log(media);
console.log(media / numbers.length);

if (numbers[numbers.length-1] > 20) {
    console.log('Valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}

for (let index = 1; index < numbers.length; index++) {
    if (maior < numbers[index]) {
        maior = numbers[index];
    } else if (menor > numbers[index]) {
        menor = numbers[index];
    }
}
console.log(maior);

if (impares > 0) {
    console.log(impares)
} else {
    console.log('Nenhum valor impar encontrado')
}

console.log(menor);

for (let i = 0; i <= 24; i++) {
    novo[i] = i + 1;
    div = novo[i] / 2;
    console.log(div);
}
console.log(novo);

let n = 10, fatorial = 1;

for (let i = 1; i <= n; i++) {
    fatorial *= i;
}

console.log(fatorial);

let nome = 'trybe', newStr = '';

for (let i = nome.length - 1; i >= 0; i--) {
    newStr += nome[i];
}

console.log(newStr);

let array = ['java', 'javascript', 'python', 'html', 'css'], maiorN = array[0];

for (let index = 1; index < array.length; index++) {
    if (maiorN.length < array[index].length) {
        maiorN = array[index];
    }
}

console.log(maiorN);

let numberz = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numberz.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numberz[index] < numberz[secondIndex]) {
        let position = numberz[index];
        numberz[index] = numberz[secondIndex];
        numberz[secondIndex] = position;
      }
    }
}

console.log(numberz);

let numberc = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numberc.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numberc[index] > numberc[secondIndex]) {
        let position = numberc[index];
        numberc[index] = numberc[secondIndex];
        numberc[secondIndex] = position;
      }
    }
}
  
console.log(numberc);


let numberd = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], multar = [];

for (let index = 0; index < numberd.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        
    }
}