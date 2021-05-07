
/* TS INTERFACES */
interface Card {
    suit: string,
    rank: number,
    value: string,
    color: string
}


/* GLOBAL VARIABLES */
const deck: Card[] = generateDeck(); 


/* FUNCTIONS */
function generateDeck(): Card[] {
    
    let deck: Card[] = [];
    let suits: string[] = ['&hearts;', '&clubs;', '&diams;', '&spades;'];

    for(let suit of suits){
        
        for(let i:number = 2; i<=14; i++){

            let val:string = `${i}`;
            if(i === 11) { val = 'J' } 
            if(i === 12) { val = 'D' } 
            if(i === 13) { val = 'K' } 
            if(i === 14) { val = 'A' } 
            
            let color: string = (suit === '&hearts;' || suit === '&diams;') ? 'red' : 'black';

            let card: Card = {
                suit: suit,
                rank: i,
                value: val,
                color: color 
            }

            deck.push(card);
            
        }
    }

    return deck;

}


function updateUI(): void {

    // Slumpar index i deck
    const rand: number = Math.floor(Math.random()*deck.length);

    // plockar kortet på det index
    const card: Card = deck.splice(rand, 1)[0];

    // skapar HTML av den informationen
    const el:string = `
    <article class="${card.color}">
        <header>
            <p class="suit">${card.suit}</p>
            <p>${card.value}</p>
        </header>
        <h1 class="suit">${card.suit}</h1>
        <footer>
            <p class="suit">${card.suit}</p>
            <p>${card.value}</p>
        </footer>
    </article>`;

    // leta reda på main
    let target: HTMLElement = document.querySelector('main');

    // töm main
    target.innerHTML = '';

    // appenda nya kortet
    target.insertAdjacentHTML('beforeend', el)

}

updateUI()

let btn: HTMLElement = document.querySelector('button');

btn.addEventListener('click', () => {

    if(deck.length){
        // new card
        updateUI()

        // update counter
        document.querySelector('.counter').innerHTML = `${deck.length} / 52`;
    
    } else {
        alert('Kortleken är slut!')
    }
})