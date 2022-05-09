const game = new Game();
game.initialize();

function Game() {
    const audioFail = document.getElementById("audioFail");
    const audioSuccess = document.getElementById("audioSuccess");
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const levelText = document.querySelector('.level');
    const moles = document.querySelectorAll('.mole');
    const bestScoresPanel = document.querySelector('bestScores');
    let minPeepTime = 1000;
    let maxPeepTime = 1000;
    let lastHole;
    let timeUp = true;
    let score = 0;
    let level = 1;
    let name;
    let bestScores = [
      {"name" : "Anonymous", "score" : 0},
      {"name" : "Anonymous", "score" : 0},
      {"name" : "Anonymous", "score" : 0},
      {"name" : "Anonymous", "score" : 0},
      {"name" : "Anonymous", "score" : 0},
    ];

    this.initialize = () => {
        moles.forEach(mole => mole.addEventListener('click', this.bonk));
        holes.forEach(hole => hole.addEventListener('click', this.sound));
    }

    this.randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.randomHole = holes => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) return this.randomHole(holes);
        lastHole = hole;
        return hole;
    }

    this.peep = () => {
        const time = this.randomTime(minPeepTime, maxPeepTime);
        const hole = this.randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) this.peep();
        }, time);
    }

    this.startGame = () => {
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        name = document.getElementById("name").value || "Anonymous"
        this.peep();
        setTimeout(() => {
          timeUp = true;
          this.changeScore();
          this.levelUp();
        }, 10000)
    }

    this.levelUp = () => {
      if(score > 5 && minPeepTime >= 500) {
        minPeepTime -= 500;
        level++;
        levelText.textContent = level;   
      }
    }

    this.bonk = e => {
        if (!e.isTrusted) return;
        if(!timeUp) {
          audioSuccess.play();
          score++;
          scoreBoard.textContent = score;
        };
        e.target.classList.remove('up');
    }

    this.sound = e => {
      if(!e.target.classList.contains('mole') && !timeUp) audioFail.play();
    }

    this.changeScore = () => {
      scoreBoard.textContent = score;
      let newScore = false;
      var i;
      for(i = 0; i < 5; i++) {
        if(score >= bestScores[i].score) {
          bestScores.splice(i,0,{"name" : name, "score" : score})
          bestScores.pop();
          newScore = true;
          break;
        }
      }
      if(newScore) {
        while(i < 5){
          document.querySelector('.name'+i).textContent = bestScores[i].name;
          document.querySelector('.points'+i).textContent = bestScores[i].score;
          i++;
        }
      }
    }
}




