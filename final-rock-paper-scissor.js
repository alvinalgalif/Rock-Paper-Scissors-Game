let score = JSON.parse(localStorage.getItem('score')) || {
    Win: 0,
    Loose: 0,
    Tie: 0,
};

updateScoreElement();

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}

function updateScoreElement() {
    document.querySelector('.dash-score')
        .innerHTML = `Win: ${score.Win},  Lose: ${score.Loose},  Draw: ${score.Tie}`;
}

function resetScore() {
    score.Win = 0;
    score.Loose = 0;
    score.Tie = 0;
    updateLocalStorage();
}

function pickComputerMove() {
    const randomnumber = Math.random();
    let computerMove = '';

    if (randomnumber >= 0 && randomnumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomnumber >= 1/3 && randomnumber < 2/3) {
        computerMove = 'Paper';
    } else if (randomnumber >= 2/3 && randomnumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}

function playgame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'draw!';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else if (computerMove === 'Scissors') {
            result = 'You win';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'draw!';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else if (computerMove === 'Scissors') {
            result = 'draw!';
        }
    }

    if (result === 'You win') {
        score.Win += 1;
    } else if (result === 'You lose') {
        score.Loose += 1;
    } else if (result === 'draw!') {
        score.draw += 1;
    }

    updateLocalStorage();

    updateScoreElement();

    document.querySelector('.dash-result')
        .innerHTML =`${result}`;

    document.querySelector('.dash-moves')
        .innerHTML = 
        `You
<img src="images/${playerMove}-emoji.png" class="Rock-Paper-Scissors-icon">
<img src="images/${computerMove}-emoji.png" class="Rock-Paper-Scissors-icon">
Computer`;
}