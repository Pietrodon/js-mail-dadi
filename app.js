// creazione numero random per l'utente
let numbUser = Math.round(Math.random () * 5 + 1)
console.log(numbUser)

// creazione numero random per il computer
let numbComputer = Math.round(Math.random () * 5 + 1)
console.log(numbComputer)

// confronto numeri per capire chi ha vinto 
if(numbUser > numbComputer){
    alert('Complimenti hai vinto')
} else if (numbUser < numbComputer){
    alert('Peccato hai perso')
} else {
    alert('Pareggio')
} 
    



