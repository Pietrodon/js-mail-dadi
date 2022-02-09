// richiamo elemnti html
let htmlElementUser = document.getElementById('numero-user')
let htmlElementComputer = document.getElementById('numero-computer')


// creazione numero random per l'utente
let numbUser = Math.round(Math.random () * 5 + 1)
htmlElementUser.innerHTML += numbUser 
console.log(numbUser)

// creazione numero random per il computer
let numbComputer = Math.round(Math.random () * 5 + 1)
htmlElementComputer.innerHTML += numbComputer
console.log(numbComputer)

// richiamo elemento per il risultoto 
let htmlElementRisultato = document.getElementById('risultato')

// confronto numeri per capire chi ha vinto 
if(numbUser > numbComputer){
    let esito = ('Complimenti hai vinto') 
} else if (numbUser < numbComputer){
    let esito = ('Peccato hai perso')
} else {
    let esito = ('Pareggio')
} 

    
htmlElementRisultato.innerHTML += esito


