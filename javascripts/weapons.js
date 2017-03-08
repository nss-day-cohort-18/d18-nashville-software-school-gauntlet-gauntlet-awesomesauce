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

OldGauntlet.WeaponsContainer.BroadSword.prototype = function() {
  this.name = "Broad Sword";
  this.damage = 14;
  this.hands = 2;
};
OldGauntlet.WeaponsContainer.BroadSword.prototype = new OldGauntlet.WeaponsContainer.Weapon();

OldGauntlet.WeaponsContainer.WarAxe.prototype = function() {
  this.name = "War Axe";
  this.damage = 18;
  this.hands = 2;
};
OldGauntlet.WeaponsCase.WarAxe.prototype = new OldGauntlet.WeaponsContainer.Weapon();

OldGauntlet.WeaponsContainer.Bubbles.prototype = function() {
  this.name = "Bubbles";
  this.damage = 1;
  this.hands = 1;
};
OldGauntlet.WeaponsCase.Bubbles.prototype = new OldGauntlet.WeaponsContainer.Weapon();

OldGauntlet.WeaponsContainer.Spear.prototype = new OldGauntlet.WeaponsContainer.Spear();
  this.name = "Spear";
  this.damage = 15;
  this.hands = 2;
};
OldGauntlet.WeaponsCase.Spear.prototype = new OldGauntlet.WeaponsContainer.Weapon();


return OldGauntlet;

})(Gauntlet || {});
