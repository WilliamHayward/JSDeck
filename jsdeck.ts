

class JSDeck {
    private cards : any[];
    private position : number = 0;
    private cardOrder : number[];
    constructor(cards : any[] = []) {
        this.cards = cards;
    }

    public add(card : any, count : number = 1) {
        let i : number;
        for (i = 0; i < count; i++) {
            this.cards.push(card);
        }
    }

    public size() : number {
        return this.cards.length;
    };

    public remaining() : number {
        return this.size() - this.position;
    }

    public shuffle() : void {

    }

    public shuffleRemaining() : void {

    }

    public draw(count? : number) : any {
        let i;

        if (count === undefined) {
            let card = null;
            if (this.position < this.cards.length) {
                card = this.cards[this.position];
                this.position++;
            }

            return card;
        }

        let cards = [];
        for (i = 0; i < count; i++) {
            cards.push(this.draw());
        }

        return cards;
    }

    public reset() {

    }
}

export = JSDeck;