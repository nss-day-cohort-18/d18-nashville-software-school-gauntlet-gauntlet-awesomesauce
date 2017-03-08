var Gauntlet = (function(OldGauntlet) {

OldGauntlet.WeaponsContainer = {};

OldGauntlet.WeaponsContainer.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

OldGauntlet.WeaponsContainer.Dagger = function() {
  this.name = "Dagger";
  this.damage = 4;
  this.hands = 1;
};
OldGauntlet.WeaponsContainer.Dagger.prototype = new OldGauntlet.WeaponsContainer.Weapon();

OldGauntlet.WeaponsContainer.BroadSword = function() {
  this.name = "Broad Sword";
  this.damage = 14;
  this.hands = 2;
};
OldGauntlet.WeaponsContainer.BroadSword.prototype = new OldGauntlet.WeaponsContainer.Weapon();

OldGauntlet.WeaponsContainer.WarAxe = function() {
  this.name = "War Axe";
  this.damage = 18;
  this.hands = 2;
};
OldGauntlet.WeaponsContainer.WarAxe.prototype = new OldGauntlet.WeaponsContainer.Weapon();

OldGauntlet.WeaponsContainer.Bubbles = function() {
  this.name = "Bubbles";
  this.damage = 1;
  this.hands = 1;
};
OldGauntlet.WeaponsContainer.Bubbles.prototype = new OldGauntlet.WeaponsContainer.Weapon();

OldGauntlet.WeaponsContainer.Spear = function() {
  this.name = "Spear";
  this.damage = 15;
  this.hands = 2;
};

OldGauntlet.WeaponsContainer.Spear.prototype = new OldGauntlet.WeaponsContainer.Weapon();


return OldGauntlet;

})(Gauntlet || {});
