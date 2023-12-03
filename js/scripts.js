/*
1)Chiedi all'utente il suo nome,
2)poi chiedi il suo cognome,
3)poi chiedi il suo colore preferito
4)Infine scrivi sulla pagina nomecognomecolorepreferito114 
    */

//input dati
const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Insserisci il tuo cognome");
const colore = prompt("Inserisci il tuo colore preferito");
let numero=Math.floor(Math.random() * 101);
let password=`La password generata è la seguente:${nome}${cognome}${colore}${numero}`;
console.log(password);
//altra possibilità era di utilizzare i +
//output dati
document.writeln(password);
document.querySelector("body #password").innerHTML=(password);

/*
altra possibilità invece di utilizzare  document.writelg()
è l'utilizzo della selezione per id
document.getElementById("password").innerHTML = (password);
*/

/*
una terza possibilità è utilizzare la funzione querySelector("")
*/