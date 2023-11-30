//input dati
const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Insserisci il tuo cognome");
const colore = prompt("Inserisci il tuo colore preferito");
let numero=Math.floor(Math.random() * 101);
let password=`La password generata è la seguente:${nome}${cognome}${colore}${numero}`
//altra possibilità era di utilizzare i +
document.writeln(password);