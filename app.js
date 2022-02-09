// ESERCIZIO DADI
// // richiamo elemnti html
// let htmlElementUser = document.getElementById('numero-user')
// let htmlElementComputer = document.getElementById('numero-computer')


// // creazione numero random per l'utente
// let numbUser = Math.round(Math.random () * 5 + 1)
// htmlElementUser.innerHTML += numbUser 
// console.log(numbUser)

// // creazione numero random per il computer
// let numbComputer = Math.round(Math.random () * 5 + 1)
// htmlElementComputer.innerHTML += numbComputer
// console.log(numbComputer)

// // richiamo elemento per il risultoto 
// let htmlElementRisultato = document.getElementById('risultato')
// console.log(htmlElementRisultato)

// // confronto numeri per capire chi ha vinto 
// if(numbUser > numbComputer){
//     let esito = ('Complimenti hai vinto') 
//     htmlElementRisultato.innerHTML += esito
// } else if (numbUser < numbComputer){
//     let esito = ('Peccato hai perso')
//     htmlElementRisultato.innerHTML += esito
// } else {
//     let esito = ('Pareggio')
//     htmlElementRisultato.innerHTML += esito
// } 


// ESERCIZIO MAIL

// arrey con databaseMail
const databaseMail = [ 'mikemaignan@yahoo.it', 
    'zlatanibrahimovic@gmail.com', 
    'olivergiroud@gmail.com', 
    'fikayotomori@libero.it', 
    'brahimdiaz@yahoo.it']
console.log(databaseMail)


// richiesta mail all'utente
let userEmail = prompt("inserisci la tua e-mail")
// dichiaro variabile risulato confronto
let risultato = false
// leggo le mail del databais e le controllo con quella dell'utente per confrontarle
for (let i = 0;i<databaseMail.length;i++) {  
 if (userEmail === databaseMail[i]){
        risultato = true
    } 
    }

    if ( risultato){
        alert ('sei dentro')
    } else {
        alert ('sei fuori')
    }




