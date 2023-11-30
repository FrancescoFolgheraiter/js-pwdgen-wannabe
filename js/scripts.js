//input dati
const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Insserisci il tuo cognome");
const colore = prompt("Inserisci il tuo colore preferito");
let numero=Math.floor(Math.random() * 101);
let password=`La password generata è la seguente:${nome}${cognome}${colore}${numero}`
console.log(password)
//altra possibilità era di utilizzare i +
document.writeln(password);

/*
altra possibilità invece di utilizzare  document.writelg()
è l'utilizzo della selezione per id
document.getElementById("password").innerHTML = (password);
*/
