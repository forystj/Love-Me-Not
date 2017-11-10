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
  const $closeMenu = $('.close-menu');
  const $petal = $('.falling-petal');

  const menu = () => {
    $menu.css('display', 'block');
  }

  const petals = () => {
    //falling petal on click of rose
    $petal.addClass('fall');
    //dedtuct one play from current user
    setTimeout(function() {
    $petal.removeClass('fall');
  }, 5000);
  }

  const closeBox = () => {
    $menu.css('display', 'none');
  }

  $rose.on('click', petals);

  $closeMenu.on('click', closeBox);

  $instructions.on('click', menu);


});
