'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [ 
        {
            name: 'linterna',
            img: 'assets/images/heroes/linterna.png',
        },
        {
            name: 'linterna',
            img: 'assets/images/logos/linterna-logo.png',
        },
        {
            name: 'batman',
            img: 'assets/images/heroes/batman.png',
        },
        {
            name: 'batman',
            img: 'assets/images/logos/batman-logo.png',
        },
        {
            name: 'flash',
            img: 'assets/images/heroes/flash.png',
        },
        {
            name: 'flash',
            img: 'assets/images/logos/flash-logo.png',
        },
        {
            name: 'superman',
            img: 'assets/images/heroes/superman.png',
        },
        {
            name: 'superman',
            img: 'assets/images/logos/superman-logo.png',
        },
        {
            name: 'capitan',
            img: 'assets/images/heroes/capitan.png',
        },
        {
            name: 'capitan',
            img: 'assets/images/logos/capitan-logo.png',
        },
        {
            name: 'hulk',
            img: 'assets/images/heroes/hulk.png',
        },
        {
            name: 'hulk',
            img: 'assets/images/logos/hulk-logo.png',
        },
        {
            name: 'ironman',
            img: 'assets/images/heroes/ironman.png',
        },
        {
            name: 'ironman',
            img: 'assets/images/logos/ironman-logo.png',
        },
        {
            name: 'lobezno',
            img: 'assets/images/heroes/lobezno.png',
        },
        {
            name: 'lobezno',
            img: 'assets/images/logos/lobezno-logo.png',
        },
        {
            name: 'spiderman',
            img: 'assets/images/heroes/spiderman.png',
        },
        {
            name: 'spiderman',
            img: 'assets/images/logos/spiderman-logo.png',
        },
        {
            name: 'thor',
            img: 'assets/images/heroes/thor.png',
        },
        {
            name: 'thor',
            img: 'assets/images/logos/thor-logo.png',
        },
        {
            name: 'wonderwoman',
            img: 'assets/images/heroes/wonderwoman.png',
        },
        {
            name: 'wonderwoman',
            img: 'assets/images/logos/wonderwoman-logo.png',
        },
        {
            name: 'aquaman',
            img: 'assets/images/heroes/aquaman.png',
        },
        {
            name: 'aquaman',
            img: 'assets/images/logos/aquaman-logo.png',
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const title = document.querySelector('.score');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //create your board
    function createBoard () {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'assets/images/blank.png' );
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
            cards[optionOneId].setAttribute('src', 'assets/images/yeah.jpg');
            cards[optionTwoId].setAttribute('src', 'assets/images/yeah.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/blank.png');
            cards[optionTwoId].setAttribute('src', 'assets/images/blank.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
            title.classList.add('congrats');
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
//# sourceMappingURL=main.js.map
