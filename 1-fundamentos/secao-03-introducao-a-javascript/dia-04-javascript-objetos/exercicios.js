let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(info.personagem + ' , seja muito bem vinde!')

info['recorrente'] = 'Sim';

console.log(info.recorrente);

for (let key in info) {
    console.log(key);
}

for (let key in info) {
    console.log(info[key]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let key in info) {
    if (
        key === 'recorrente' &&
        info[key] === 'Sim' &&
        info2[key] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    },
);

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');


let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

function customerInfo(order) {
    let address = 'address';
    let deliveryPerson = order.order.delivery.deliveryPerson;
    let customerName = order.name;
    let customerPhone = order.phoneNumber;
    let street = order.address.street;
    let number = order.address.number;
    let apartment = order.address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

function orderModifier(order) {
    let newBuyer = order.name = 'Luiz Silva';
    let newTotal = order.payment.total = '50';
    let pizzas = Object.keys(order.order.pizza);
    let drinks = order.order.drinks.coke.type;

    console.log('Olá ' + newBuyer + ', o total do seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + newTotal + ',00.');
}

orderModifier(order);


let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function nightShift(obj, key, value) {
    obj[key] = value;
}

nightShift(lesson2, 'turno', 'noite');
console.log(lesson2);

function listKeys(obj) {
    return Object.keys(obj);
} 

console.log(listKeys(lesson1));

function listLength(obj) {
    return Object.keys(obj).length;
}

console.log(listLength(lesson1));

function listValues(obj) {
    return Object.values(obj);
}

console.log(listValues(lesson1));

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});

console.log(allLessons)

function getNumberOfStudents(obj) {
    let total = 0;
    let keys = Object.keys(obj);

    for (let index in keys) {
        total += obj[keys[index]].numeroEstudantes;
    }
    return total;
}

console.log(getNumberOfStudents(allLessons));

function getValueByNumber(obj, number) {
    return Object.values(obj)[number];
}

console.log(getValueByNumber(lesson1, 2));

function verifyPair(obj, key, value) {
    let entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
}

console.log(verifyPair(lesson2,'professor','Carlos'));

let numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
};

function rToN(numero) {
    numero = numero.toLowerCase();
    let len = numero.length;
    let soma = numerosRomanos[numero[len - 1]];
    let atual = numerosRomanos[numero[len - 1]];

    for (let i = 2; i <= len; i++) {
        let prox = numerosRomanos[numero[len - i]];

        if (atual <= prox) {
            soma += prox;
        } else {
            soma -= prox;
        }
        atual = prox
    }
    return soma;
}

console.log(rToN('IMMMMMMMMMMMMMMMM'));

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    let result = [];

    for (let i = 0; i < vector.length; i++) {
        let aux = vector[i];

        for (let j = 0; j < aux.length; j++) {
            let current = aux[j];
            
            if (current % 2 === 0) {
                result.push(current);
            }
        }
    }
    return result;
}

console.log(arrayOfNumbers(vector));

let basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

let result = {};

for (let index = 0; index < basket.length; index++) {
    let fruit = basket[index];
    if (!result[fruit]) result[fruit] = 0;
    result[fruit] += 1;
}

let summaries = [];

for (fruit in result) {
    let message = `${result[fruit]} ${fruit}`;
    if (result[fruit] > 1) message += 's';
    summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

let moradores = {
    blocoUm: [
      {
        nome: 'Luíza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
};

let moradoresBlocoDois = moradores.blocoDois;

let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

for (let index = 0; index < moradores.blocoUm.length; index++) {
    console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
}

for (let index = 0; index < moradores.blocoDois.length; index++) {
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
}

function getNumberOfStudentsMath(obj) {
    let total = 0;
    let keys = Object.keys(obj);
    
    for (let i in keys) {
        if (obj[keys[i]].materia === 'Matemática') {
            total += obj[keys[i]].numeroEstudantes;
        }
    }
    return total;
}

console.log(getNumberOfStudentsMath(allLessons));

function getInfo(obj, name) {
    let allLessons = [];
    let numberStudents = 0;
    let values = Object.values(obj);
    for (index in values) {
      if (values[index].professor === name) {
        allLessons.push(values[index].materia)
        numberStudents += values[index].numeroEstudantes;
      }
    }
    return { aulas: allLessons, estudantes: numberStudents };
}
  
function createReport(allLessons, name) {
    let report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
}
console.log(createReport(allLessons, 'Maria Clara'));