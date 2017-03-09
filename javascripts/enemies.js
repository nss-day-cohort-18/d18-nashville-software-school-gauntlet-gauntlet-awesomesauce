var Gauntlet = (function(OldGauntlet) {

OldGauntlet.Combatants.Orc = function() {
  this.health = this.health + 40;
  this.strength = 90;
  this.species = "Orc";
  this.weapon = null;
  this.class = null;
  this.weapons = ["Dagger", "BroadSword", "WarAxe", "Bubbles", "Spear"];
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.damage = null;


  this.generateWeapon = function () {
    var random = Math.round(Math.random() * (this.weapons.length - 1));

    var randomWeapon = this.weapons[random];

    this.weapon = randomWeapon;
    return this.weapon;
  };

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new OldGauntlet.GuildHall[randomClass]();
    return this.class;
  }
  this.damage = function () {
    let damage = Math.round(Math.random() * ComputerEnemy.strength - 12);

    this.damage = damage;
    return this.damage;
  }
};

OldGauntlet.Combatants.Orc.prototype = new OldGauntlet.Combatants.Monster();

return OldGauntlet;

})(Gauntlet || {});
