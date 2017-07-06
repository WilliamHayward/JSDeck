var assert = require('assert');
var jsdeck = require('../jsdeck.js');

describe('Deck', function() {
    it ('Should be able to create a new deck', function() {
        var deck = new jsdeck.Deck();
        assert.equal(deck.size(), 0);

        deck = new jsdeck.Deck([
            "1", "2", "3"
        ]);
        assert.equal(deck.size(), 3);
        
        deck = new jsdeck.Deck([
            new Card("1"),
            new Card("2"),
            new Card("3"),
            new Card("4")
        ]);
        assert.equal(deck.size(), 4);
    });

    it ('Should be able to add new cards to the deck', function() {
        var deck = new jsdeck.Deck();
        assert.equal(deck.size(), 0);

        var card = new jsdeck.Card();

        //TODO different quanitities
    });

    it ('Should be able to remove cards from the deck', function() {

    });

    it ('Should shuffle the entire deck', function() {

    });

    it ('Should shuffle remaining cards', function() {

    });

    it ('Should allow cards to be drawn', function() {

    });

    it ('Should allow cards to be returned', function() {

    });
});