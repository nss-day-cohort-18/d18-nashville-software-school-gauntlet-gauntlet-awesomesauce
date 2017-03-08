/*
  Test code to generate a human player and an orc player
 */

let PlayerOne;
let PlayerClass;
let PlayerWeapon;
let ComputerEnemy;
let GameOver = false;
let PlayerOneAlive = true;
let PlayerTwoAlive = false;
// PlayerOne.setWeapon(new Gauntlet.WeaponsCase.WarAxe());

// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());






$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

//add an event listener to player name
  $("#player-name-button").click(function(e) {
//set that PlayerOne name to human prototype to inherit attributes
    PlayerOne = new Gauntlet.Combatants.Human();
      console.log("PlayerOne", PlayerOne);

//defines the combatantTypes
    var combatantType = ["Human", "Orc", "Dwarf"];

//creates the randomize variable
    var random = Math.round(Math.random() * (combatantType.length-1));
    console.log("random", random);

//randomizes the combatant
    var randomCombatant = combatantType[random];
    ComputerEnemy = new Gauntlet.Combatants[randomCombatant]();
    ComputerEnemy.generateClass();

//link random weapon function to Surprise Me Button
    ComputerEnemy.setWeapon("Class-Surprise-Me");

//Assignes Player One obj to player name element value, so that we can link to cards
    PlayerOne.playerName = $("#player-name").val();
  })

//where player will choose a class and weapon

/*
  TODO: Add event listeners to class select, weapon select, start battle, etc
*/
$(".class-select").click(function(e) {
    $("#selected-player-class").val($(this).closest("div").prop("id"));
    PlayerClass = $(this).closest("div").prop("id");
    console.log("You are the", PlayerClass);
})

$(".weapon-select").click(function(e) {
  $("#selected-player-weapon").val($(this).closest("div").prop("id"));
    PlayerWeapon = $(this).closest("div").prop("id");
    console.log("Your weapon is a", PlayerWeapon);
})

$("#select-weapon").click(function(e) {
  // PlayerOne.setClass(PlayerClass);
  console.log("you clicked a weapon");
})

$("#Start-battle-button").click(function(e) {
  PlayerOne.setWeapon(PlayerWeapon);
  console.log("Player One is ready for battle");
})


  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */


  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--play-again":
        moveAlong = ($("#player-name").val() !== "");
        break;
  }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
  Placeholder to show player selected weapons/class
 */


  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
