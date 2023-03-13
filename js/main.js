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



switchRendering(typeSelectDom.value);



typeSelectDom.addEventListener('change', function(){
    switchRendering(typeSelectDom.value);
})



// FUNZIONI

function renderCards(arrayOfObjects){
    cardContainerDom.innerHTML = '';
    arrayOfObjects.forEach(element => {
        cardContainerDom.innerHTML += `
        <div class="col-12 col-md-4 col-lg-2 mb-3 mb-md-5">
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