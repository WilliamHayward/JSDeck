var assert = require('assert');
var JSDeck = require('../jsdeck.js');

describe ('Deck', function() {
    it ('Should allow cards to be created', function() {
        var card = new JSDeck.Card("1");
        assert.equal(card.value, "1");

        card = new JSDeck.Card(2);
        assert.equal(card.value, 2);

        card = new JSDeck.Card([1, 2, 3]);
        assert.deepEqual(card.value, [1, 2, 3]);
    });

    it ('Should allow cards to be copied', function() {
        var card1 = new JSDeck.Card("1");
        var card2 = new JSDeck.Card(2);
        var card3 = new JSDeck.Card([1, 2, 3]);

        var clone1 = new JSDeck.Card(card1);
        var clone2 = new JSDeck.Card(card2);
        var clone3 = new JSDeck.Card(card3);
        
        assert.equal(clone1.value, "1");
        assert.equal(clone2.value, 2);
        assert.deepEqual(clone3.value, [1, 2, 3]);
    });
});