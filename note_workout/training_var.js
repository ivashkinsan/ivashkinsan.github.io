let training_var_obj = {
    1: ['G1', 'B1', 'A2'],
    2: ['E3', 'B3', 'F4']
};


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}