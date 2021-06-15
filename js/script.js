
//! es_1
// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.



var negozioBici = [
    {
        nome : "corsa",
        peso : 15
    },
    {
        nome : "montain bike",
        peso : 25
    },
    {
        nome : "BMX",
        peso : 19
    }
];


var  minPeso = negozioBici[0];

for (var i = 1; i < negozioBici.length; i ++) {
    if (negozioBici[i].peso < minPeso.peso){
        minPeso = negozioBici[i];
    }
}

document.getElementById("es_1").innerHTML = "la bici con il minor peso è: " + minPeso.nome;


//! es_2
// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


var pesoTot = 0;


var bancarella = [
    {
        varieta : "naturella",
        peso : 10,
        lunghezza : 2.5,
    },

    {
        varieta : "paesana",
        peso : 15,
        lunghezza : 1.5,
    },

    {
        varieta : "bio",
        peso : 18,
        lunghezza : 3,
    },

    {
        varieta : "fresca",
        peso : 12,
        lunghezza : 3.5,
    }
];


for (var i = 0; i < bancarella.length; i++){
    
    pesoTot += bancarella[i].peso;
}

document.getElementById("es_2").innerHTML= "il totale del peso di tutte le zucchine è pari a " + pesoTot;


//! es_3
// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine


var bancarella = [
    {
        varieta : "fresca",
        peso : 12,
        lunghezza : 23
    },
    {
        varieta : "bio",
        peso : 18,
        lunghezza : 3
    },
    {
        varieta : "naturella",
        peso : 10,
        lunghezza : 11
    },
    {
        varieta : "paesana",
        peso : 15,
        lunghezza : 14
    },
    {
        varieta : "fresca2",
        peso : 12,
        lunghezza : 20
    },
    {
        varieta : "bio2",
        peso : 18,
        lunghezza : 19
    },
    {
        varieta : "naturella2",
        peso : 10,
        lunghezza : 14
    },
    {
        varieta : "paesana2",
        peso : 15,
        lunghezza : 16
    },
    {
        varieta : "fresca3",
        peso : 12,
        lunghezza : 22
    },
    {
        varieta : "bio3",
        peso : 18,
        lunghezza : 4
    },
    {
        varieta : "naturella3",
        peso : 13,
        lunghezza : 30
    },
    {
        varieta : "paesana3",
        peso : 11,
        lunghezza : 14
    },
    {
        varieta : "paesanina",
        peso : 15,
        lunghezza : 9
    }

];

var minore = [];
console.log(minore);
var totMinore = 0;


var maggiore = [];
console.log(maggiore);
var totMaggiore = 0;



for (var i = 0; i < bancarella.length; i++){

    if (bancarella[i].lunghezza < 15){
        minore.push(bancarella[i]);
    }else{
        maggiore.push(bancarella[i]);
    };
}




for(var i = 0; i < minore.length; i++){
    totMinore += minore[i].peso;
}
document.getElementById("es_3").innerHTML= "il gruppo di zucchine con una lunghezza minore di 15cm ha un peso complessivo di: " + totMinore;

for(var i = 0; i < maggiore.length; i++){
    totMaggiore += maggiore[i].peso;
}
document.getElementById("es_3_1").innerHTML= "il gruppo di zucchine con una lunghezza maggiore di 15cm ha un peso complessivo di: " + totMaggiore;