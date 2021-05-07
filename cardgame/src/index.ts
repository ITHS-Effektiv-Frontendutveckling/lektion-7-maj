interface Card {
    suite: string,
    rank: number,
    value: string,
    color: string
}

function generateDeck(): Card[] {
    
    let deck: Card[] = [];
    let suits: string[] = ['&hearts;', '&clubs;', '&diams;', '&spades;'];

    for(let suit of suits){
        
        for(let i:number = 2; i<=14; i++){

            let val:string = '';
            if(i === 11) { val = 'J' } 
            if(i === 12) { val = 'D' } 
            if(i === 13) { val = 'K' } 
            if(i === 14) { val = 'A' } 
            
            let color: string = (suit === '&hearts;' || suit === '&diams;') ? 'red' : 'black';

            let card: Card = {
                suite: suit,
                rank: i,
                value: val,
                color: color 
            }

            deck.push(card);
            
        }
    }

    return deck

}