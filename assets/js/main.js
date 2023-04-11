// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while.

const listaSpesa =[
    'latte',
    'pomodoro',
    'hamburguer',
    'pizza'
]

const listaContainer = document.getElementById('lista-spesa')

// for(let i=0; i < listaSpesa.length; i++){

//     const item = listaSpesa[i]

//     const listItem = document.createElement('li')

//     listItem.innerText = item

//     listaContainer.append(listItem)
// }

// while

let i = 0;

while( i < listaSpesa.length){

    const item = listaSpesa[i]

    const listItem = document.createElement('li')
    listItem.innerText = item
    listaContainer.append(listItem)

    i++

}