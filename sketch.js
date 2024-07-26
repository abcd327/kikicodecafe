let player;
let ennemy;
let bigEnnemy
let ammo;

function preload(){
	//explosion = loadsound('sounds/explosion.wav')
}
function setup() {
	new Canvas(500, 500);
	player = new Sprite(250,475,50, 'triangle');
    ennemy = new Group();
    ennemy.width = 25;
    ennemy.height = 25;
    ennemy.x = () => random(0,500) ;
    ennemy.y = 0;
	ennemy.health = 3;
	ennemy.mass = 20;
	
	bigEnnemy = new ennemy.Group();
	bigEnnemy.width *= 2; // bigEnnemy.width = bigEnnemy.width * 2;
	bigEnnemy.height *= 2;
	bigEnnemy.velocity.y /= -0,5;
	bigEnnemy.health *= 5;
	bigEnnemy.mass = 300;

	ammo = new Group();
	ammo.diameter = 5;
	ammo.color = 'yellow';
	ammo.velocity.y = -2; 
	ammo.life = 240;

	ennemy.overlaps(ammo, attack);
}
function attack(ennemy,ammo) {
	ammo.remove();
	ennemy.health--;
	explosion
	if(ennemy.health === 0) ennemy.remove();
}

let count=0;
const PLAYER_SPEED = 4;
function draw() {
	background('skyblue');
    count++; // count += 1;  count = count + 1;
	if (kb.pressing('space') || mouse.pressing()) {
		new ammo.Sprite(player.x, player.y - 30)
	}
	if (count % 90 === 0){
	let theEnnemy = new ennemy.Sprite();
	theEnnemy.velocity.y = 1;
	}
	if (count % 360 === 0) {
		new bigEnnemy.Sprite();
	}
	if(kb.pressing('left')) {
		player.x -= 2;
	}if(kb.pressing('right')) {
		player.x += 2;
	}
	       		
}