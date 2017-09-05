  var targetNumber = Math.floor((Math.random() * 102 + 19));
  var wins = 0;
  var losses = 0;
  var player = 0;
  var firstCrystal = Math.floor((Math.random() * 12 + 1));
  var secondCrystal = Math.floor((Math.random() * 12 + 1));
  var thirdCrystal = Math.floor((Math.random() * 12 + 1));
  var fourthCrystal = Math.floor((Math.random() * 12 + 1));

  console.log("The first crystal is worth " +firstCrystal);
  console.log("The second crystal is worth " +secondCrystal);
  console.log("The third crystal is worth " +thirdCrystal);
  console.log("The fourth crystal is worth " +fourthCrystal);

  $("#number-to-guess").html(targetNumber);
  $("#player").html(player);
  $("#wins").html(wins);  
  $("#losses").html(losses);

  function winsLosses() {
    if (player === targetNumber){
      alert("You Win!");
      targetNumber = Math.floor((Math.random() * 102 + 19));
      $("#number-to-guess").html(targetNumber);
      player = 0;
      ++wins;
      $("#player").html(player);
      $("#wins").html(wins); 
      $("#losses").html(losses);

    }
  

    if (player >= targetNumber) {
      alert("You lose!");
      targetNumber = Math.floor((Math.random() * 102 + 19));
       $("#number-to-guess").html(targetNumber);
      player = 0;
      ++losses;
       firstCrystal = Math.floor((Math.random() * 12 + 1));
       secondCrystal = Math.floor((Math.random() * 12 + 1));
       thirdCrystal = Math.floor((Math.random() * 12 + 1));
       fourthCrystal = Math.floor((Math.random() * 12 + 1));
      $("#player").html(player);
      $("#wins").html(wins); 
      $("#losses").html(losses);
    }
  }

  


  $("#firstcrystal").on("click", function() {
    console.log("Click registered")
    player += firstCrystal;
    winsLosses();
    $("#player").html(player);
    $("#wins").html(wins); 
    $("#losses").html(losses);


    });

  $("#secondcrystal").on("click", function() {
    player += secondCrystal; 
    console.log("Click registered")
    winsLosses();
    $("#player").html(player);
    $("#wins").html(wins); 
    $("#losses").html(losses);

    });

  $("#thirdcrystal").on("click", function() {
    player += thirdCrystal; 
    console.log("Click registered")
    winsLosses();
    $("#player").html(player);
    $("#wins").html(wins); 
    $("#losses").html(losses);

    });

  $("#fourthcrystal").on("click", function() {
    player += fourthCrystal; 
    console.log("Click registered")
    winsLosses();
    $("#player").html(player);
    $("#wins").html(wins); 
    $("#losses").html(losses);

    });   