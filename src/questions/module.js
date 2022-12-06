function game(userOptions) {
    let result;
    const paper = 'paper',
        scissors = 'scissors',
        rock = 'rock';

    function computerChoose() {
        let computerOptions;
        const computerRandom = Math.random() * 3;
        if (computerRandom < 1) {
            computerOptions = paper;
        } else if (computerRandom < 2) {
            computerOptions = scissors;
        } else {
            computerOptions = rock;
        }
        return computerOptions;
    }

    const computerChooseOptions = computerChoose();
    if (userOptions === computerChooseOptions) {
        result = 0;
    } else if ((userOptions === paper && computerChooseOptions === rock) || (userOptions === rock && computerChooseOptions === scissors) || (userOptions === scissors && computerChooseOptions === paper)) {
        result = 1;
    } else {
        result = -1;
    }
    return result;
}

module.exports = game;