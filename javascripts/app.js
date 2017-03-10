/*
  Test code to generate a human player and an orc player
 */

let PlayerOne;
let PlayerClass;
let PlayerSpecies;
let PlayerWeapon;
let ComputerEnemy;
let GameOver = false;
let PlayerOneAlive = true;
let PlayerTwoAlive = false;
// PlayerOne.setWeapon(new Gauntlet.WeaponsContainer.WarAxe());

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
    var randomCombatant = combatantType[random];
    PlayerOne.playerName = $("#player-name").val();
  })



// ComputerEnemy =
//     var randomCombatant = combatantType[random];
//     ComputerEnemy = new Gauntlet.Combatants.Monster[randomCombatant]();
//     ComputerEnemy.generateClass();


/*
  TODO: Add event listeners to class select, weapon select, start battle, etc
*/

$(".species-select").click(function(e) {
  $("#species-select").val($(this).closest("div").prop("id"));
  PlayerSpecies = $(this).closest("div").prop("id");
  PlayerOne.setSpecies(PlayerSpecies);
console.log("Add Class to Prototype", PlayerOne);

})

$(".class-select").click(function(e) {
  $("#class-select").val($(this).closest("div").prop("id"));
    PlayerClass = $(this).closest("div").prop("id");
    PlayerOne.setClass(PlayerClass);
    console.log("Add Class to Prototype", PlayerOne);
})

$(".weapon-select").click(function(e) {
  $("#selected-player-weapon").val($(this).closest("div").prop("id"));
    PlayerWeapon = $(this).closest("div").prop("id");
    PlayerOne.setWeapon(PlayerWeapon);
  console.log("Add Weapon to Prototype", PlayerOne)
})

$("#select-weapon").click(function(e) {
  PlayerOne.setClass(PlayerClass);
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
      case "card--species":
        moveAlong = ($("#player-name").val() !== "");
        break;
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


  /*
    When the defeatYourEnemies button is clicked,
    also add all player and enemy information onto card
   */


  $("#defeatYourEnemies").click(function() {
    $("#playerName").html(PlayerOne.playerName);
    $("#playerclass").html(PlayerOne.species);
    $("#playerweapon").html(PlayerOne.weapon);
    $("#playerattack").html("STR : " + PlayerOne.strength);
    $("#playerhealth").html("Health : " + PlayerOne.health);
    // $("#playerDamage").html("Damage : " + ComputerEnemy.damage);
    

    ComputerEnemy = new Gauntlet.Combatants.Orc();
    ComputerEnemy.generateClass(ComputerEnemy);
    ComputerEnemy.generateWeapon(ComputerEnemy);
    ComputerEnemy.damage(ComputerEnemy);
      console.log("Enemy", ComputerEnemy);

    $("#enemyName").html(ComputerEnemy.species);

    $("#enemyClass").html(ComputerEnemy.class.name);
    $("#enemyWeapon").html(ComputerEnemy.weapon);
// ADD STRENGTH WHEN FIXED
    $("#enemyAttack").html("STR : " + ComputerEnemy.strength);

    $("#enemyHealth").html("Health : " + ComputerEnemy.health);
    $("#enemyDamage").html("Damage : " + ComputerEnemy.damage);
    console.log("Computer Enemy Damage", computerEnemyDied);
  // });
  $("#attack-button").click(function() {
        PlayerOne.health = (PlayerOne.health - ComputerEnemy.damage);
        if (PlayerOne.health - ComputerEnemy.damage <= 0) {
                playerOneDied();
                console.log("Player One Died", playerOneDied);
        }
        $("#playerHealth").html("Health " + (PlayerOne.health - ComputerEnemy.damage));
      //Player Two//
        ComputerEnemy.health = (ComputerEnemy.health - PlayerOne.damage);
        if (ComputerEnemy.health - PlayerOne.weapon.damage <= 0) {
                computerEnemyDied();

        }

        $("#enemyHealth").html("Health " + (ComputerEnemy.health - PlayerOne.damage));
   });


  function  playerOneDied() {
    GameOver = true;
  }

  function  computerEnemyDied() {
      GameOver = true;
  }

});


});

// canvas element
//
var canvas,ctx,pt,ox,oy;
canvas = document.getElementsByTagName('canvas')[0];
ctx = canvas.getContext('2d');
canvas.width=canvas.height=400;
aaa();

function aaa(){
    var a,b,c,d,tim,st,ban,tx,ty,yc,ys,xc,xs,bai,r,r2,max;
    ctx.fillStyle="rgba(111, 111, 111, 0)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    tx=canvas.width/2;
    ty=canvas.height/2;
    tim=new Date().getTime()/80;
    a=tim/17;
    yc=Math.cos(a);
    ys=Math.sin(a);
    a=tim/23;
    xc=Math.cos(a);
    xs=Math.sin(a);
    ctx.fillStyle="rgb(244,244,244)";

    pt=[];
    ox=oy=0;
    ban=0;
    bai=1+Math.sin(tim/43)*0.6;

    max=60;
    r=tim/13;
    r2=tim/43;
    for(a=0;a<max;a++){
c=1;
if(a<20)c=(a+1)/20;
if(a>=max-20)c=(max-a)/20;
        tui(0,0,0,r,r2,0,c);
        b=Math.sin(a/30+tim/23)/6*bai;
        r+=b;
        b=Math.sin(a/43+tim/13)/6*bai;
        r2+=b;
    }

    for(a=0;a<pt.length;a++){
        henkan(pt[a][0]);
        henkan(pt[a][1]);
        b=pt[a][0][2];
        c=pt[a][1][2];
        if(c>b)b=c;
        pt[a][2]=b;
    }
    ox=ox/pt.length/2;
    oy=oy/pt.length/2;

    for(a=0;a<pt.length;a++){
        b=pt[a];
        o={q:pt[a]};
        c=b[2];
        o.m=c;
        if(!st){
            st=o;
            continue;
        }
        b=st;
        while(1){
            if(b.m>c){
                if(!b.mae){
                    st=o;
                }else{
                    b.mae.tugi=o;
                }
                o.mae=b.mae;
                b.mae=o;
                o.tugi=b;
                break;
            }
            if(!b.tugi){
                b.tugi=o;
                o.mae=b;
                break;
            }
            b=b.tugi;
        }
    }//a

    d=st;
    for(z=0;z<10000;z++){
        if(!st)break;
        nmaru(d.q[0],d.q[1]);
        if(!d.tugi)break;
        d=d.tugi;
    }

    function tui(x,y,z,yp,xp,kai,s){
        var a,b,h,h2,x1,y1,z1,px,py,pz,mys,myc,mxc,mxs,gen;
        gen=3;

        if(kai>gen)return;
        myc=Math.cos(yp);
        mys=Math.sin(yp);
        mxc=Math.cos(xp);
        mxs=Math.sin(xp);

        py=myc;
        pz=mys;
        px=-pz*mxs;
        pz=pz*mxc;

        b=50+kai*5;
        if(kai==gen)b=150;
b*=s;
        x1=x+px*b;
        y1=y+py*b;
        z1=z+pz*b;

        h=5+kai*3;
h*=s;
        px*=h;
        py*=h;
        pz*=h;

        h2=h+kai*1.5;
        if(kai==gen)h2=5;
h2*=s;
        pt.push([[x+px,y+py,z+pz,h],[x1-px,y1-py,z1-pz,h2]]);
        ban++;
        kai++;
        a=Math.sin(kai/3+tim/29+ban/113)*1.3;
        tui(x1,y1,z1,yp+a,xp+a,kai,s);
    }

    function henkan(p){
        var x,y,z,x1,y1,z1,han;
        x=p[0];
        y=p[1];
        z=p[2];
        han=p[3];
        y1=y*yc-z*ys;
        z1=y*ys+z*yc;
        x1=x*xc-z1*xs;
        z1=x*xs+z1*xc;
        z=Math.pow(1.4,z1/100);
        ox+=x1*z;
        oy+=y1*z;
        p[0]=x1*z+tx;
        p[1]=y1*z+ty;
        p[2]=z1;
        p[3]=han*z;
        return p;
    }
    requestAnimationFrame(aaa);
}

function nmaru(p1,p2){
    var a,b,c,px,py,kyo,sx,sy,ex,ey,han,han2,
        r,hi,x1,y1,x2,y2,x3,y3,x4,y4,sya;

    if(p2[3]>p1[3]){
        a=p1;p1=p2;p2=a;
    }

    sx=p1[0]-ox;
    sy=p1[1]-oy;
    han=p1[3];
    ex=p2[0]-ox;
    ey=p2[1]-oy;
    han2=p2[3];
    px=ex-sx;
    py=ey-sy;
    r=Math.atan2(py,px);
    kyo=Math.pow(px*px+py*py,0.5);
    if(kyo+han2<=han*1.05){
        ctx.beginPath();
        ctx.arc(sx,sy,han,0,Math.PI*2,0);
        ctx.fill();
        ctx.stroke();
        return;
    }

    hi=han2-han;
    sya=Math.atan2(hi,kyo);
    a=r-Math.PI/2-sya;
    //x1=Math.cos(a)*han+sx;
    //y1=Math.sin(a)*han+sy;
    x2=Math.cos(a)*han2+ex;
    y2=Math.sin(a)*han2+ey;
    b=r+Math.PI/2+sya;

    x3=Math.cos(b)*han+sx;
    y3=Math.sin(b)*han+sy;
    //x4=Math.cos(b)*han2+ex;
    //y4=Math.sin(b)*han2+ey;

    ctx.beginPath();
    ctx.arc(sx,sy,han,b,a,0);
    ctx.lineTo(x2,y2);
    ctx.arc(ex,ey,han2,a,b,0);
    ctx.lineTo(x3,y3);
    ctx.fill();
    ctx.stroke();
}
