// Chiedi all’utente il suo nome

let name = prompt("come ti chiami?");

// Chiedi il suo cognome

let surname = prompt("come è il tuo cognome?");

// Chiedi il suo colore preferito

let color = prompt("qual è il tuo colore preferito?");

let password = name + surname + color + 21;

document.getElementById("mio_id").innerHTML = `La password assegnata è: ${password}`
