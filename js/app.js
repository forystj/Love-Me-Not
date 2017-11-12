$( () => {

  //game name: "They love me not"

  //make a game where there are two players and a rose

  //rose has a random generated number of petals

  //each player click decreases petal amount

  //current player has random generated amount of moves
  //the amount of moves they take is up to them

  //current player clicks rose to remove petals
    //idea: rose is generated with math.random a number make it = i
    //when user clicks i--

  //player to pluck last petal loses the game

  //when game is over: text box saying player_ will "never find love"

  //rose becomes dead and gloomy

  //restart game option


  //on end of players turn:
    //idea: give next player a chance at love? - generate their plucking amount


  const $container = $('.container');
  const $rose = $('#rose');
  const $instructions = $('.instructions');
  const $menu = $('#menu');
  const $menuBox = $('.menu-box');
  const $closeMenu = $('.close-menu');
  const $petal = $('.falling-petal');
  const $startMenu = $('#start-menu');
  const $startBox = $('#start-box');
  const $meterBall = $('.meter-ball');

  const instructionsMenu = () => {
    $menu.css('display', 'block');
  }

  const $startGame = $('#start-game');

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
    $menu.css('display', 'none');
    $startMenu.css('display', 'none');
  }

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

  let $currentPlayer = [];

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
    $startMenu.css('display', 'block');
    $startBox.html('Player ' + $currentPlayer + ' Starts!' + '<br>' + 'you are starting with')
  }

  // const $rightBox = $('#right-box');

  let $playerInfo = $('.player-info');
  let $chanceInfo = $('.chance-info');
  const rightInfo = () => {
    $playerInfo.text("Player " + $currentPlayer + "'s Turn!");
    $chanceInfo.text("You have: " + " chances left");
  }

//===========counter=========================
  let add;
  const start = () => {
      add = setInterval('count.value++',800);
     if (count.value > 5) {
      clearInterval(add);
    }
  }
  // start();

  $('#stop').on('click', () => {
    clearInterval(add);
    console.log(count.value);
  });

  // const $meter = $('.meter');

  $('#start').on('click', () => {
    start();
    // $meter.css('display', 'inline-block')

    $meterBall.addClass('meter-ball-move');
    setTimeout(() => {
    $meterBall.removeClass('meter-ball-move');
  }, 20000);
  });

  //=========on clicks==========================

  const $meterContainer = $('#meter-container');
  const $passTurn = $('.pass-turn');
  $passTurn.on('click', () => {
    $meterContainer.css('opacity', '1');
  })

  $instructions.on('click', instructionsMenu);

  $startGame.on('click', () => {
    generatePetals();
    choosePlayer();
    rightInfo();
    // startBox();
  });

  $rose.on('click', () => {
    petalPick();
    decreasePetals();
  });

  $closeMenu.on('click', closeBox);

  // startBox();

});
