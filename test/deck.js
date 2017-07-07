var assert = require('assert');
var JSDeck = require('../jsdeck.js');

describe('Deck', function() {
    it ('Should be able to create a new deck', function() {
        var deck = new JSDeck();
        assert.equal(deck.size(), 0);

        deck = new JSDeck([
            "1", "2", "3"
        ]);
        assert.equal(deck.size(), 3);
        
        deck = new JSDeck([
            "1",
            "2",
            "3",
            "4"
        ]);
        assert.equal(deck.size(), 4);
    });

    it ('Should be able to add new cards to the deck', function() {
        var deck = new JSDeck();
        assert.equal(deck.size(), 0);

        deck.add("Apple");
        assert.equal(deck.size(), 1);

        deck.add("Peach", 2);
        assert.equal(deck.size(), 3);

        deck.add("Banana");
        assert.equal(deck.size(), 4);

        deck.add("Pear", 2);
        assert.equal(deck.size(), 6);

        deck.add("Strawberry", 1000);
        assert.equal(deck.size(), 1006);
    });

    it ('Should be able to remove cards from the deck', function() {
        // TODO: This is a very low priority
    });

    it ('Should shuffle the entire deck', function() {
        // TODO: Revise these tests
        var deck = new JSDeck();
        deck.add("Apple");
        deck.add("Pear", 9999);

        deck.shuffle();
        card = deck.draw();
        assert.equal(card, "Pear");
        assert.equal(deck.size(), 10000);
        assert.equal(deck.remaining(), 9999);

        deck.shuffle();
        assert.equal(deck.size(), 10000);
        assert.equal(deck.remaining(), 10000);

        // NOTE: Because of randomization, there is a 1 / 10000 chance of this test failling on accident
        
    });

    it ('Should shuffle remaining cards', function() {
        // TODO: Revise these tests
        var deck = new JSDeck();
        deck.add("Apple", 3);
        deck.add("Pear", 9999);
        deck.draw(2);

        deck.shuffleRemaining();
        card = deck.draw();
        assert.equal(card, "Pear");
        assert.equal(deck.remaining(), 9999);

        deck.shuffleRemaining();
        assert.equal(deck.remaining(), 9999);

        // NOTE: Because of randomization, there is a 1 / 10000 chance of this test failling on accident
    });

    it ('Should allow cards to be drawn', function() {
        var deck = new JSDeck([
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ]);

        var card = deck.draw();
        assert.equal(card, "1");
        assert.equal(deck.remaining(), 5); // 5 cards remaining
        assert.equal(deck.size(), 6); // SHould not effect total size of deck

        var cards = deck.draw(2);
        assert.deepEqual(cards, ["2", "3"]);
        assert.equal(deck.remaining(), 3); // 3 cards remaining
        assert.equal(deck.size(), 6); // SHould not effect total size of deck

        cards = deck.draw(1); // When given an argument (even 1), should ALWAYS return array
        assert.deepEqual(cards, ["4"]);
        assert.equal(deck.remaining(), 2); // 2 cards remaining
        assert.equal(deck.size(), 6); // SHould not effect total size of deck

        cards = deck.draw(0);
        assert.deepEqual(cards, []);
        assert.equal(deck.remaining(), 2); // 2 cards remaining
        assert.equal(deck.size(), 6); // SHould not effect total size of deck

        cards = deck.draw(-1); // Negative values should be treated as "0"
        assert.deepEqual(cards, []);
        assert.equal(deck.remaining(), 2); // 2 cards remaining
        assert.equal(deck.size(), 6); // SHould not effect total size of deck
    });

    it ('Should gracefully handle deck exhaustion', function() {
        var deck = new JSDeck([
            "1",
            "2",
            "3"
        ]);

        var cards = deck.draw(3);
        assert.deepEqual(cards, ["1", "2", "3"]);
        cards = deck.draw();
        assert.deepEqual(cards, null);
        
        deck = new JSDeck([
            "1",
            "2",
            "3"
        ]);

        var cards = deck.draw(4);
        assert.deepEqual(cards, ["1", "2", "3", null]);
    })

    it ('Should allow cards to be returned', function() {
        // TODO: Not a priority
    });

    it ('Should allow the deck to be reset (without shuffling)', function() {
        var deck = new JSDeck([
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ]);

        deck.draw(3);

        assert.equal(deck.remaining(), 3);

        deck.reset();

        assert.equal(deck.remaining(), 6);

    });
});