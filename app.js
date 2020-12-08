document.addEventListener('DOMContentLoaded', () => {

    // card options 
    const cardArray = [
        {
            name: 'pokemon1',
            img: 'images/pokemon1.png'
        },
        {
            name: 'pokemon1',
            img: 'images/pokemon1.png'
        },
        {
            name: 'pokemon2',
            img: 'images/pokemon2.png'
        },
        {
            name: 'pokemon2',
            img: 'images/pokemon2.png'
        },
        {
            name: 'pokemon3',
            img: 'images/pokemon3.png'
        },
        {
            name: 'pokemon3',
            img: 'images/pokemon3.png'
        },
        {
            name: 'pokemon4',
            img: 'images/pokemon4.png'
        },
        {
            name: 'pokemon4',
            img: 'images/pokemon4.png'
        },
        {
            name: 'pokemon5',
            img: 'images/pokemon5.png'
        },
        {
            name: 'pokemon5',
            img: 'images/pokemon5.png'
        },
        {
            name: 'pokemon6',
            img: 'images/pokemon6.png'
        },
        {
            name: 'pokemon6',
            img: 'images/pokemon6.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('#grid')
    const attempsDisplay = document.querySelector('#attemps')
    const resultDisplay = document.querySelector('#results')
    const titleDisplay = document.querySelector('#title')

    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var totalAttemps = 0

    //Adding tailwind classes to grid elements array
    const gridClass = "border-solid border-4 boder-gray-300 rounded-full"


    //create boardgame
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.setAttribute('class', gridClass)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            titleDisplay.textContent = 'You found a match'
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].setAttribute('class', 'not-active ' + gridClass)
            cards[optionTwoId].setAttribute('class', 'not-active ' + gridClass)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            titleDisplay.textContent ='Sorry, try again'
        }
        totalAttemps += 1
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = "Found: " + cardsWon.length
        attempsDisplay.textContent = "Attemps: " + totalAttemps
        if (cardsWon.length === cardArray.length/2) {
            titleDisplay.textContent = 'Congratulations! You catch them all'
        }
    }


    //flip car
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 250)
        }
    }

    createBoard()
})