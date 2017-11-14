$( () => {

  //mains
  const $container = $('.container');
  const $rose = $('#rose');
  const $petal = $('.falling-petal');

  const $instructions = $('.instructions');

  // modals
  const $instModal = $('#inst-modal');
  const $instBox = $('#inst-box');
  const $closeModal = $('.close-modal');
  const $startModal = $('#start-modal');
  const $startBox = $('#start-box');
  const $startRiskModal = $('#start-risk-modal');


  //meter
  const $meterBall = $('.meter-ball');


  let $currentPlayer = [];


  const playGame = (event) => {
    if ($currentPlayer === 1) {


      //player has _ amount of picks
      //let pick until that amount is up or they choose to give up the rest of picks
        //if used all picks -  $rose.off('click');
        //if give up picks - clear pick amount to 0
      //alert their turn is over
      //give button to temp next player with petal picks
      //on click, generate amount for next player's turn
      //change to next player
      $currentPlayer = 2;
    } else if ($currentPlayer === 2) {
      }
  }


  const instructionsModal = () => {
    $instModal.css('display', 'block');
  }

  const $startGame = $('.start-game');

  let petalAmount = [];

  const generatePetals = () => {
    petalAmount = Math.floor(Math.random() * 20) + 10;
    console.log(petalAmount);
  }

  const $pickResultsModal = $('#pick-results-modal');

  const changePlayer = () => {
    $pickResultsModal.css('display', 'inline-block');
    setTimeout(autoClose, 3000);
    if ($currentPlayer === 1) {
      $currentPlayer = 2;
      $('.new-player').text("Player " + $currentPlayer + " has been passed the rose");
      rightInfo();
      setTimeout(startRisk, 3000);
    } else if ($currentPlayer === 2) {
      $currentPlayer = 1;
      $('.new-player').text("Player " + $currentPlayer + " has been passed the rose");
      rightInfo();
      setTimeout(startRisk, 3000);
      }

  }

  const pickResults = () => {
    $rose.css('opacity', '0.5');
    changePlayer();
  }


  const decreasePetals = () => {
    //deduct one play from current petal amount
    petalAmount -= count.value;
    //dissable button when at 0
    if (petalAmount <= 0){
      alert('player _ wins!')
      $rose.off('click');
    } else if (petalAmount !== 0) {
      setTimeout(pickResults, 3000);
    }
    console.log(petalAmount);
  };

  const petalPick = () => {
    //falling petal on click of rose
    $petal.addClass('fall');
    setTimeout(() => {
    $petal.removeClass('fall');
    }, 5000);
  }

  const closeBox = () => {
    $instModal.css('display', 'none');
    $startModal.css('display', 'none');
  }

  const autoClose = () => {
    $startRiskModal.css('display', 'none');
    $meterResultsModal.css('display', 'none');
    $pickResultsModal.css('display', 'none');
  }

  const choosePlayer = () => {
    $currentPlayer = Math.floor(Math.random() * 2) + 1;
  }

  const startBox = () => {
    choosePlayer();
    $startModal.css('display', 'block');

  }

  // const $rightBox = $('#right-box');

  let $playerInfo = $('.player-info');
  let $pickInfo = $('.pick-info');
  const rightInfo = () => {
    $playerInfo.text("Player " + $currentPlayer + "'s Turn!");
    $pickInfo.text("Petals picked: " );
  }

//===========counter=========================
  let add;
  const start = () => {
      add = setInterval('count.value++',800);
     if (count.value > 5) {
      clearInterval(add);
    }
  }


  $('#start').on('click', () => {
    start();
    $meterBall.addClass('meter-ball-move');

    setTimeout(() => {
    $meterBall.removeClass('meter-ball-move');
    }, 20000);

  });

  $('#stop').on('click', () => {
    clearInterval(add);
    console.log(count.value);
    $meterContainer.css('opacity', '0.5');
    meterResults();
  });

  const startRose = () => {
    $rose.css('opacity', '1');
  }

  const $meterResultsModal = $('#meter-results-modal');
  const meterResults = () => {
    $('.meter-results').html(count.value + ' picks');
    $meterResultsModal.css('display', 'inline-block');
    setTimeout(autoClose, 3000);
    setTimeout(startRose, 3000);
  }

  const startRisk = () => {
    $startRiskModal.css('display', 'inline-block');
    setTimeout(autoClose, 3000);
    $meterContainer.css('opacity', '1');
  }

  //=========on clicks==========================

  const $meterContainer = $('#meter-container');
  const $passTurn = $('.pass-turn');
  $passTurn.on('click', () => {
    $meterContainer.css('opacity', '1');
  })

  $instructions.on('click', instructionsModal);

  $startGame.on('click', () => {
    generatePetals();
    choosePlayer();
    rightInfo();
    startRisk();
  });

  $rose.on('click', () => {
    petalPick();
    decreasePetals();
  });

  $closeModal.on('click', closeBox);

  startBox();

});
