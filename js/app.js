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

  const decreasePetals = () => {
    //deduct one play from current user
    petalAmount -= 1;
    //dissable button when at 0
    if (petalAmount === 0){
      alert('player _ wins!')
      $rose.off('click');
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
  }

  const choosePlayer = () => {
    $currentPlayer = Math.floor(Math.random() * 2) + 1;
    if ($currentPlayer === 1) {
      // alert('player one starts!');
      // playGame();
    } else if ($currentPlayer === 2) {
      // alert('player two starts!');
      // playGame();
      }
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
    $pickInfo.text("You have: " + " chances left");
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
    $rose.css('opacity', '1')
  });


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
