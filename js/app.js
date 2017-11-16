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
  const $winModal = $('#win-modal');

  //meter
  const $meterBall = $('.meter-ball');


  let $currentPlayer = [];

  const instructionsModal = () => {
    $instModal.css('display', 'block');
  }

  let petalAmount = [];

  const generatePetals = () => {
    petalAmount = Math.floor(Math.random() * 20) + 10;
  }

  const $pickResultsModal = $('#pick-results-modal');

  const changePlayer = () => {
    $pickResultsModal.css('display', 'inline-block');
    setTimeout(autoClose, 3000);
    if ($currentPlayer === 1) {
      $currentPlayer = 2;
      $('.new-player').text("Player " + $currentPlayer + " has been passed the rose");
      topInfo();
      setTimeout(startRisk, 3000);
      count.value = [];
    } else if ($currentPlayer === 2) {
      $currentPlayer = 1;
      $('.new-player').text("Player " + $currentPlayer + " has been passed the rose");
      topInfo();
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
      $('.loser').html($currentPlayer);
      $winModal.css('display', 'block');
      $rose.attr('src', 'dead_rose.png');
      $rose.off('click');
    } else if (petalAmount !== 0) {
      setTimeout(pickResults, 3000);
    }
  };

  const petalPick = () => {
    $petal.addClass('fall');
    setTimeout(() => {
    $petal.removeClass('fall');
    }, 5000);
  }

  const restart = () => {
    window.location.reload(true);
  }

  $('.restart').on('click', restart);

  const $startGame = $('.start-game');
  const $newGame = $('#new-game');

  const newGame = () => {
    petalAmount = [];
    startBox();
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

  let $playerInfo = $('.player-info');
  let $pickInfo = $('.pick-info');
  const topInfo = () => {
    $playerInfo.html("Player " + $currentPlayer);
  }

  const $firstInstClick = $('.first-inst');

  const firstInst = () => {
    $startModal.css('display', 'none');
    $instModal.css('display', 'block');
  }

  $firstInstClick.on('click', firstInst);

  let add;

  const start = () => {
    add = setInterval('count.value++',232);
}

  $('#start').on('click', (event) => {
    start();
    $meterBall.css('display', 'inline-block').addClass('meter-ball-move');
  });

  $('#stop').on('click', () => {
    clearInterval(add);
    $meterContainer.css('opacity', '0.5');
    meterResults();
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
    topInfo();
    startRisk();
  });

  $rose.on('click', () => {
    petalPick();
    decreasePetals();
  });

  $closeModal.on('click', closeBox);

  $newGame.on('click', newGame);

  startBox();

});
