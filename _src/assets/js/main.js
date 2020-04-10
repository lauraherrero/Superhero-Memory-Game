'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [ 
        {
            name: 'linterna',
            img: '../images/heroes/linterna.png',
        },
        {
            name: 'linterna',
            img: '../images/logos/linterna-logo.png',
        },
        {
            name: 'batman',
            img: '../images/heroes/batman.png',
        },
        {
            name: 'batman',
            img: '../images/logos/batman-logo.png',
        },
        {
            name: 'flash',
            img: '../images/heroes/flash.png',
        },
        {
            name: 'flash',
            img: '../images/logos/flash-logo.png',
        },
        {
            name: 'superman',
            img: '../images/heroes/superman.png',
        },
        {
            name: 'superman',
            img: '../images/logos/superman-logo.png',
        },
        {
            name: 'capitan',
            img: '../images/heroes/capitan.png',
        },
        {
            name: 'capitan',
            img: '../images/logos/capitan-logo.png',
        },
        {
            name: 'hulk',
            img: '../images/heroes/hulk.png',
        },
        {
            name: 'hulk',
            img: '../images/logos/hulk-logo.png',
        },
        {
            name: 'ironman',
            img: '../images/heroes/ironman.png',
        },
        {
            name: 'ironman',
            img: '../images/logos/ironman-logo.png',
        },
        {
            name: 'lobezno',
            img: '../images/heroes/lobezno.png',
        },
        {
            name: 'lobezno',
            img: '../images/logos/lobezno-logo.png',
        },
        {
            name: 'spiderman',
            img: '../images/heroes/spiderman.png',
        },
        {
            name: 'spiderman',
            img: '../images/logos/spiderman-logo.png',
        },
        {
            name: 'thor',
            img: '../images/heroes/thor.png',
        },
        {
            name: 'thor',
            img: '../images/logos/thor-logo.png',
        },
        {
            name: 'wonderwoman',
            img: '../images/heroes/wonderwoman.png',
        },
        {
            name: 'wonderwoman',
            img: '../images/logos/wonderwoman-logo.png',
        },
        {
            name: 'aquaman',
            img: '../images/heroes/aquaman.png',
        },
        {
            name: 'aquaman',
            img: '../images/logos/aquaman-logo.png',
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //create your board
    function createBoard () {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png' );
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard);
            grid.appendChild(card)
        }
    } 

    //check for matches
    function checkForMatch () {
        const cards =  document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'images/yeah.jpg');
            cards[optionTwoId].setAttribute('src', 'images/yeah.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard () {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);

        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard () 
})