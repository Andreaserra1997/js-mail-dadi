/*
chiedere mail all'utente e metterla nella variabile email
creare lista mail accessibili
    SE la email è presente nella lista mail accessibili
     ALLORA stampa messaggio positivo
    FINE SE
*/

const mailList = ['@gmail', '@virgilio', '@libero', '@hotmail', '@yahoo'];

const email = prompt('Che tipo di email usi? es:@gmail');

for (let i = 0; i < mailList.length; i+=email) {
    console.log(mailList[i])
}