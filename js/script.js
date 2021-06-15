
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

document.getElementById("es_1").innerHTML = "la bici con il minor peso è: " + minPeso;


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
    
    console.log(bancarella[i]);
    
    pesoTot += bancarella[i].peso;
}

document.getElementById("es_2").innerHTML= "il totale del peso di tutte le zucchine è pari a " + pesoTot;



// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine