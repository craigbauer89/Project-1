
// NEL CLASS

// // alert('ciao a tutti')

// // var nome1 = 'Mario Rossi';
// // var nome2 = 'jim bo';
// // var nome3 = 'TIMMY TIM'; 
// // var nome4 = 'randy marsh'; // "Mario Rossi"

// /* 
// multilinea
// commento
// */ 

// var nomeCognome;
// nomeCognome = 'Ian bailiy';
// // string / number / boolean / undefined / null

// // console.log(nomeCognome);


// var eta = 2.5;
// // console.log(typeof eta);

// var studente = true;
// // console.log(typeof studente);

// var citta;
// // console.log(typeof citta);

// var auto = null; // per il momento non ch un valore
// // console.log(typeof auto);

// var indirrizio;
// indirrizio = 'via Eipcode 53';

// var response = window.prompt('Ti piace JS?', 'no!');
// console.log(response + ' ' + eta);

// window.alert(nomeCognome);
// // console.log(nomeCognome); // questa linea parire solo quando click ok sopra
// // document.write(nomeCognome);
// // document.getElementById('titoletto').innerHTML = nome4;

// console.log(window);

// ESERCISIO


// var tag = document.createElement("p");
// var text = document.createTextNode(eta);
// tag.appendChild(text);
// var element = document.getElementById("new");
// element.appendChild(tag);

alert('benventuto al nostro Sito');


var nome = window.prompt("Inserici il tuo Nome");
var cognome =window.prompt("Inserici il tuo Cognome");
var eta =window.prompt("Inserici la tua Eta");
var citta =window.prompt("Inserici la tua Citta");
var email =window.prompt("Inserici la tua email");

document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("eta").innerHTML = eta ;
document.getElementById("citta").innerHTML = citta;
document.getElementById("email").innerHTML = email;

var fullname = nome + ' ' + cognome + 'anni:' + eta + 'citta:' + citta + '(' + email + ')';

window.alert(fullname);
document.write(fullname);
console.log(fullname);
