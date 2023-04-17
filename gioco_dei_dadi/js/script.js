/*
generare un numero random da 1 a 6 per l'utente e metterlo nella variabile userNumber
generare un numero random da 1 a 6 per il computer e metterlo nella variabile computerNumber
    SE (userNumber > computerNumber)
        ALLORA stampa: L'utente ha vinto
    ALTRIMENTI SE (computerNumber > userNumber)
        ALLORA stampa: Il computer ha vinto
    ALTRIMENTI stampa: I numeri sono uguali, pareggio!
*/

const userNumber = Math.floor(Math.random() * 6) + 1
console.log(`Il numero dell'utente è:` + userNumber)
const computerNumber = Math.floor(Math.random() * 6) + 1
console.log(`Il numero del computer è:` +computerNumber)


if (userNumber > computerNumber) {
    console.log(`L'utente ha vinto`);
} else if (computerNumber > userNumber) {
    console.log(`Il computer ha vinto`);
} else {
    console.log(`I numeri sono uguali, pareggio!`)
}