const iconsArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// RIFERIMENTI DOM

const cardContainerDom = document.getElementById('cardContainer');
const typeSelectDom = document.getElementById('typeSelect');

//  Ciclo l'array e genero per ogni elemento una stringa di 
//  colore casuale in formato esadecimale da assegnare al valore
//  della key 'color'
iconsArray.forEach(element => {
    element.color = generateRandomHexColor();
})

//  Inizializzazione delle opzioni della select tramite i diversi
//  valori della key type degli oggetti contenuti nell'array fornito
createOptions(iconsArray);

//  Inizializzazione delle card all'interno dell'elemento html
//  con id="cardContainer" in base al'opzione della select selezionata
switchRendering(typeSelectDom.value);

typeSelectDom.addEventListener('change', function(){
    switchRendering(typeSelectDom.value);
})

//  FUNZIONI

//  Funzione per stampare a schermo N schede ricevendo in ingresso
//  l'array di oggetti con le opportune coppie chiave/valore
function renderCards(arrayOfObjects){
    cardContainerDom.innerHTML = '';
    arrayOfObjects.forEach(element => {
        cardContainerDom.innerHTML += `
        <div class="column mb-3 mb-md-5 pe-md-3 ps-md-3">
            <div class="card d-flex justify-content-center align-items-center rounded-3 m-auto">
                <div class="card-body text-center">
                    <i class="${element.prefix}solid ${element.prefix}${element.name}" style="color: ${element.color}"></i>
                    <p class="card-text">${element.name.toUpperCase()}</p>
                </div>
            </div>
        </div>
        `
    });
}

//  Funzione per filtrare l'array contenente gli oggetti e stampare
//  a schermo solo gli oggetti che contengolo il valore opportuno nella
//  key 'type'
function switchRendering(value){
    switch(value){
        case 'all':
            renderCards(iconsArray);
            break;
        case 'animal':
            renderCards(iconsArray.filter(element => element.type == 'animal'));
            break;
        case 'vegetable':
            renderCards(iconsArray.filter(element => element.type == 'vegetable'));
            break;
        case 'user':
            renderCards(iconsArray.filter(element => element.type == 'user'));
            break;
    }
}

//  Funzione per generare dinamicamente le opzioni all'interno della select con
//  id = "typleSelect" in base al numero di valori differenti della key 'type'
//  negli oggetti contenuti nell'array dato in ingresso
function createOptions(arrayOfObjects){
    typeSelectDom.innerHTML = '';
    typeSelectDom.innerHTML += `<option value="all">All</option>`;
    let options = [];
    arrayOfObjects.forEach(element => {
        if(!options.includes(element.type)){
            options.push(element.type);
            typeSelectDom.innerHTML += `<option value="${element.type}">${upperTheFirst(element.type)}</option>`;
        }
    })
}

//  Funzione per generare numeri casuali in un range di min e max
function randomNumber(min, max){
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

//  Funzione per generare un numero esadecimale casuale
function generateRandomHexNum(){
    let newHexNum = randomNumber(0, 15);
    if(newHexNum >= 0 && newHexNum <= 9){
        return newHexNum;
        } else {
            switch(newHexNum){
                case 10:
                    newHexNum = 'a';
                    break;
                case 11:
                    newHexNum = 'b';
                    break;
                case 12:
                    newHexNum = 'c';
                    break;
                case 13:
                    newHexNum = 'd';
                    break;
                case 14:
                    newHexNum = 'e';
                    break;
                case 15:
                    newHexNum = 'f';
                    break;
            }
        }
        return newHexNum;
}

//  Funzione per generare una stringa di colore esadecimale casuale
function generateRandomHexColor(){
    let newHexColor = '#';
    for(i=0; i < 6; i++){
        newHexColor += generateRandomHexNum();
    }
    return newHexColor;
}

//  Funzione che data una parola la restituisce formattata con la prima
//  lettera maiuscola e le altre minuscole
function upperTheFirst(word){
    let newWord = '';
    newWord += word[0].toUpperCase();
    for(i = 1; i < word.length; i++){
        newWord += word[i].toLocaleLowerCase();
    }
    return newWord;
}