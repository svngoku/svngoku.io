const somme = require('../js/sum.js');

test('ajoute 1 + 3 est egal 4', function() {
    expect(somme(1,3)).toBe(4);
});