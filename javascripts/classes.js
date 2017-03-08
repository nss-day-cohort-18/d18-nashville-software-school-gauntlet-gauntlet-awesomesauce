var Gauntlet = (function(OldGauntlet) {
/*
  TODO: Modularize this code with IIFE or Browserify
 */

OldGauntlet.GuildHall = {};
/*
  Base function for a player, or enemy, class (profession)
 */
OldGauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;
};

  // this.toString = function() {
  //   return this.name;
  // };



/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
OldGauntlet.GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
OldGauntlet.GuildHall.Fighter.prototype = new OldGauntlet.GuildHall.PlayerClass();


OldGauntlet.GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
OldGauntlet.GuildHall.Warrior.prototype = new OldGauntlet.GuildHall.Fighter();


OldGauntlet.GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
OldGauntlet.GuildHall.Valkyrie.prototype = new OldGauntlet.GuildHall.Fighter();


OldGauntlet.GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
OldGauntlet.GuildHall.Berserker.prototype = new OldGauntlet.GuildHall.Fighter();


OldGauntlet.GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
OldGauntlet.GuildHall.Monk.prototype = new OldGauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
OldGauntlet.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
OldGauntlet.GuildHall.Mage.prototype = new OldGauntlet.GuildHall.PlayerClass();


OldGauntlet.GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
OldGauntlet.GuildHall.Shaman.prototype = new OldGauntlet.GuildHall.Mage();


OldGauntlet.GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
OldGauntlet.GuildHall.Wizard.prototype = new OldGauntlet.GuildHall.Mage();


OldGauntlet.GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
OldGauntlet.GuildHall.Conjurer.prototype = new OldGauntlet.GuildHall.Mage();


OldGauntlet.GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
OldGauntlet.GuildHall.Sorcerer.prototype = new OldGauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

return OldGauntlet;

})(Gauntlet || {});
