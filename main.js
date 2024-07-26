let playerSheet;
let player
let worldSheet
let distance = dist(player.x, player.y, slime_Purple.x, slime_Purple.y);
function preload() {

 // loading font and characters
 font = loadFont('fonts/PixelOperator8.ttf');
 
// Loading sprite images

 playerSheet = loadImage('sprites/knight.png')
 worldSheet = loadImage('sprites/world_tileset.png')
 slimeSheet = loadImage('sprites/slime_purple.png')
 fruitSheet = loadImage('sprites/fruit.png');
 coinSheet = loadImage('sprites/coin.png');             
}

function setup() {
new Canvas(500, 500, 'pixelated x4')
world.gravity.y = 9.81;
allSprites.pixelPerfect = true;
player = new Sprite(62, 24, 16, 16);
player.spriteSheet = playerSheet
player.anis.offset.y = -3
player.addAnis({
     stand: { w: 32, h: 32, row: 0, frames: 4, frameDelay: 6},
     run: { w: 32, h: 32, row: 2, frames: 16},
     roll: { w: 32, h: 32, row: 5, frames: 8, frameDelay: 4},
     hurt: { w: 32, h: 32, row: 6, frames: 4, frameDelay: 8},
     dead: { w: 32, h: 32, row: 7, frames: 4, frameDelay: 16},
     death: { w: 32, h: 32, row: 7, col : 3}
 })
 player.changeAni('stand');
 player.rotationLock = true;
 player.jumpTimer = 0;
 // player.debug = true
 // attribut personnalise
 player.score = 0;
 player.lives = 3;
 player.isDead = false;

 slimePurple = new Sprite(100, -10, 16, 16)
 slimePurple.spriteSheet = slimeSheet
 slimePurple.rotationLock = true
 slimePurple.anis.offset.y = -4
 slimePurple.addAnis({
    stand: { w: 24, h: 24, row: 1, frames: 4, frameDelay: 6},
     hurt: { w: 24, h: 24, row: 2, frames: 4, frameDelay: 9}
 });
 slimePurple.changeAni('stand');
 slimePurple.health = 5;
 slimePurple.debug = false

 coins = new Group();
 coins.collider = 'none';
 coins.bounciness = 0.1;
 coins.friction = 0.1;
 coins.drag = 0;
 coins.spriteSheet = coinSheet;
 coins.addAni({ w: 16, h: 16, row: 0, frames: 12 });
 coins.tile = 'c';


 grass = new Group();
 grass.collider = 'static'
 grass.spriteSheet = worldSheet
 grass.addAni({ w: 16, h: 16 ,row: 0, col: 0 });
 grass.tile = 'g';

 rock = new Group();
 rock.collider = 'static'
 rock.spriteSheet = worldSheet
 rock.addAni({ w: 16, h: 16 ,row: 1, col: 8 }); 
 rock.tile = 'r';

 rock2 = new Group();
 rock2.collider = 'static'
 rock2.spriteSheet = worldSheet
 rock2.addAni({ w: 16, h: 16 ,row: 0, col: 8 }); 
 rock2.tile = 'R';
 
 tiles = new Tiles([

'.............g',
'.............g',
'.............g.....c.c.c.c.c.c.c.c.c.c.c..ccccccc',
'.............ggggggggggggggggggggggggggg..ggggggg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',
'.........................................cg',   
'....................ggggggggggggggggggggggg',
'...................ggRrrRrRrrrrrRrRRrRRRRrr',
'................  ggrR',
'..........gggggggggRr',
'......... gRrrrrRrRR',
'.......................',
'......................',  
'.......................',
'.......ggg.......c..c..c..c..c',
'gggggggggg.....rRrRRrrrRrRRRrrr',
'rRRRrRRrRR....................Rr',
'rr.............................RrRrr',
'rr............................',
'rr....................................rrRRrRRRrrr',
'rr.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.rr',
'rRRRrrRRRRRRRrrrRrrrrrRrRrrrRrrrRrrRrr',
'...................................................',
'...................................................',
'...................................................',
'...................................................',
'...................................................',
'...................................................',
'...................................................',
'c..............................................RrRrrRrRRrRRR',
'RRRRrRrrRrRrrrRrRrrRrRrrRRRrr...RRrRrrrrRRrRrRrrR',
'R...............................................R',
'rcccccccccccccccccccccccccccccccccccccccccccccccr',
"rcccccccccccccccccccccccccccccccccccccccccccccccR",
'RcccccccccccccccccccccccccccccccccccccccccccccccR',
'Rcccccccccccccccccccccccccccccccccccccccccccccccr',
'RRRRRRrRrRRrrrRRrrRrrrrrrRRRrRRrRrRrrrrRRrrRrrRrr'

 ], -180, 100, 16, 16);
}

function draw() {
    clear()
    for(let coin of coins)    
    if (player.overlaps(coin)){
            coin.remove();
            player.score++;
    }  
background('skyblue')
camera.x = player.x
camera.y = player.y
if(kb.pressing('right')) {
    player.mirror.x = false
    player.vel.x = 1.75;
    player.changeAni('run');
   }else if(kb.pressing('left')){
    player.mirror.x = true
    player.vel.x = -1.75;
    player.changeAni('run')
}else {
    player.changeAni('stand');
}
if (kb.presses('space') && player.colliding(tiles)) 
    player.vel.y = -4;
    
      
   
    // HUD{
	textFont(font);
	textSize(8);

    text('Score: ' + player.score, 10, 10);
        text('Vies: ' + player.lives, 10, 20);

    
    

slime_Purple ()
}


function slime_Purple(){
let distance = dist(player.x, player.y, slime_Purple.x, slime_Purple.y);
    if (distance > 40){ 
        slime_Purple.direction = slime_Purple.angleTo(player);
        slime_Purple.speed = 2;
    }else if (distance < 30) 
        slime_Purple.speed = 0;
}