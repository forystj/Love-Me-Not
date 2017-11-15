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


  // let petalsPicked = [];
  //
  // let total = 0;
  // for (var i = 0; i < petalsPicked.length; i++) {
  //   total += someArray[i];
  // }


  //meter
  const $meterBall = $('.meter-ball');


  let $currentPlayer = [];


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
      count.value = [];
    } else if ($currentPlayer === 2) {
      $currentPlayer = 1;
      $('.new-player').text("Player " + $currentPlayer + " has been passed the rose");
      rightInfo();
      setTimeout(startRisk, 3000);
      count.value = [];
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
      $rose.attr('src', 'dead_rose.png');
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
    $playerInfo.html("Player " + "<br>" + $currentPlayer);
  }

//===========counter=========================
  let add;
  const start = () => {
      add = setInterval('count.value++',232);
}

"use strict";

  $('#start').on('click', (event) => {
    start();
    $meterBall.css('display', 'inline-block').addClass('meter-ball-move');
  });

  $('#stop').on('click', () => {
    clearInterval(add);
    console.log(count.value);
    $meterContainer.css('opacity', '0.5');
    meterResults();
    // petalsPicked.push(count.value);
    $meterBall.addClass('pause-ball');
  });

  const startRose = () => {
    $rose.css('opacity', '1');
    $meterBall.removeClass('meter-ball-move');
    $meterBall.css('display', 'none');
    $meterBall.removeClass('pause-ball');
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

  const rightPicks = () => {
    $pickInfo.text("Petals picked: " );
  }
  // + total

  $rose.on('click', () => {
    petalPick();
    decreasePetals();
    rightPicks();
  });

  $closeModal.on('click', closeBox);

  startBox();

});
