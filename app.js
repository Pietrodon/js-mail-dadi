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


// esercizio mail

// arrey con databaseMail
const databaseMail = [ 'mikemaignan@yahoo.it', 
    'zlatanibrahimovic@gmail.com', 
    'olivergiroud@gmail.com', 
    'fikayotomori@libero.it', 
    'brahimdiaz@yahoo.it']
console.log(databaseMail)


// richiesta mail all'utente

let userEmail = prompt("inserisci la tua e-mail")


for (let i = 0;i<databaseMail.length;i++) {
    
    if ([i] === userEmail){
        alert('Sei dentro')
    } else {
        alert ('Il tuo indirizzo non risulta tra gli invitati')
    }
}

    



