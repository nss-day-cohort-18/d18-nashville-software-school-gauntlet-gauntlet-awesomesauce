/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = (function(OldGauntlet) {

OldGauntlet.Combatants = {};

/*
  Define the base object for any player of OldGauntlet,
  whether a human player or a monster.
 */


OldGauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

OldGauntlet.Combatants.Player.prototype.setSpecies = function(PlayerSpecies) {
  this.species = PlayerSpecies;
}

OldGauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  if (newWeapon === "Class-Surprise-Me" || newWeapon === undefined) {
    this.weapon = PlayerOne.generateWeapon();
  }
  else {
  this.weapon = new OldGauntlet.WeaponsCase[newWeapon]();
  }
}
OldGauntlet.Combatants.Player.prototype.generateWeapon = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
  var randomWeapon = this.allowedWeapons[random];
  this.weapon = new OldGauntlet.WeaponsContainer[randomWeapon]();
  return this.weapon;
}

OldGauntlet.Combatants.Player.prototype.setClass = function(PlayerSpecies) {
  this.class = PlayerClass;
}

OldGauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

OldGauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new OldGauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a
  constructor function.
 */
OldGauntlet.Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;
  this.strength = this.strength + 25;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
};
OldGauntlet.Combatants.Human.prototype = new OldGauntlet.Combatants.Player();
/*
  Define the base properties for a Elf in a
  constructor function.
 */
OldGauntlet.Combatants.Elf = function () {
  var randomSkin;

  this.species = "Elf";
  this.intelligence = this.intelligence + 25;
  this.strength = this.strength + 25;

  this.skinColors.push("blue", "green", "transparent", "black", "white");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Wizard", "Thief", "Conjurer"];
};

OldGauntlet.Combatants.Elf.prototype = new OldGauntlet.Combatants.Player();

/*
  Define the base properties for a Goblin in a
  constructor function.
 */

OldGauntlet.Combatants.Goblin = function () {
  var randomSkin;

  this.species = "Goblin";
  this.intelligence = this.intelligence + 25;
  this.strength = this.strength + 25;

  this.skinColors.push("green", "yellow", "pink", "jade");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Sorcerer", "Thief", "Ninja"];
};

OldGauntlet.Combatants.Goblin.prototype = new OldGauntlet.Combatants.Player();

/*
  Define the base properties for a monster in a
  constructor function.
 */
OldGauntlet.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

OldGauntlet.Combatants.Monster.prototype = new OldGauntlet.Combatants.Player();

return OldGauntlet;

})(Gauntlet || {});
