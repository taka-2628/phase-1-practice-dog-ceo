// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// FETCH IMAGE URLS
fetch(imgUrl)
.then(res => res.json())
.then(obj => {
    //console.log(obj)
    let urlArr = obj['message'];
    // console.log(urlArr)
    urlArr.forEach(url => renderDogs(url))
})

// RENDER IMAGES
function renderDogs(url){
    let img = document.createElement('img')
    img.src = url
    //console.log(img)
    let imgContainer = document.querySelector('#dog-image-container')
    imgContainer.append(img);
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// FETCH BREED DATA
function fetchDogBreed(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(obj => {
        let breedsObj = obj['message'];
        // use Object.key method to create an array that contains all of the keys of the object breedsObj
        keyArray = Object.keys(breedsObj);
        // use forEach to iterate over the elements in keyArray
        keyArray.forEach(element => renderBreeds(element));
    })
}

// RENDER BREEDS, then MAKE <li> INTERACTIVE 
function renderBreeds(element){
    // create <li> and assign it to a variable li
    let li = document.createElement('li');
    // make element the content of <li>
    li.textContent = element;
    // add event listener to <li> and change <li>'s color to red when clicked 
    li.addEventListener('click', (e) => {
        e.target.style.color = 'red';
    })
    // grab <ul> by its id 
    let ul = document.querySelector('#dog-breeds');
    // add <li> to DOM by appending it to <ul>
    ul.appendChild(li);
}


// MAKE <select> (DROPDOWN) INTERACTIVE 
function makeSelectInteractive(){
    let select = document.getElementById('breed-dropdown');
    select.addEventListener('change', (e) => {
        let chosenLetter = e.target.value;
        let liAllBreeds = document.querySelectorAll('li');
        liAllBreeds.forEach(li => {
            if (li.textContent.startsWith(chosenLetter)){
                li.style.display = "";
            } else {
                li.style.display = "none";
            };
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDogBreed();
    makeSelectInteractive()
})