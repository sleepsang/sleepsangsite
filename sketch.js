squareA = [];
squareB = [];
squareC = [];
squareD = [];
squareE = [];
squareF = [];
squareG = [];
squareH = [];

squareR0 = [];
squareR1 = [];
squareR2 = [];
squareR3 = [];
squareR4 = [];
squareR5 = [];
squareR6 = [];
squareR7 = [];
squareR8 = [];

squareL0 = [];
squareL1 = [];
squareL2 = [];
squareL3 = [];
squareL4 = [];
squareL5 = [];
squareL6 = [];
squareL7 = [];
squareL8 = [];

var canvas;

function setup() {
	frameRate(2);
	canvas = createCanvas(340,300);
	canvas.position(0,0);
	fill(0,0,0,50);

	for (let i=0; i<10; i++){
		squareA[i] = new SquareA((0+(i*20)),((i*20)),20,20,(255,0,0,50));
		squareB[i] = new SquareB((20+(i*20)),((i*20)),20,20,([50,200,200,50]));
		squareC[i] = new SquareA((40+(i*20)),((i*20)),20,20,(255,0,0,50));
		squareD[i] = new SquareB((60+(i*20)),((i*20)),20,20,([50,200,200,50]));
		squareE[i] = new SquareA((80+(i*20)),((i*20)),20,20,(255,0,0,50));
		squareF[i] = new SquareB((100+(i*20)),((i*20)),20,20,([50,200,200,50]));
		squareG[i] = new SquareA((120+(i*20)),((i*20)),20,20,(255,0,0,50));
		squareH[i] = new SquareB((140+(i*20)),((i*20)),20,20,([50,200,200,50]));
}

for (let i=0; i<9; i++){
	squareR0[i] = new SquareA((160+(i*20)),((i*20)),20,20,(255,0,0,50));
}

for (let i=0; i<8; i++){
	squareR1[i] = new SquareB((180+(i*20)),((i*20)),20,20,([50,200,200,50]));
}

for (let i=0; i<7; i++){
	squareR2[i] = new SquareA((200+(i*20)),((i*20)),20,20,(255,0,0,50));
}

for (let i=0; i<6; i++){
	squareR3[i] = new SquareB((220+(i*20)),((i*20)),20,20,([50,200,200,50]));
}

for (let i=0; i<5; i++){
	squareR4[i] = new SquareA((240+(i*20)),((i*20)),20,20,(255,0,0,50));
}

for (let i=0; i<4; i++){
	squareR5[i] = new SquareB((260+(i*20)),((i*20)),20,20,([50,200,200,50]));
}

for (let i=0; i<3; i++){
	squareR6[i] = new SquareA((280+(i*20)),((i*20)),20,20,(255,0,0,50));
}

for (let i=0; i<2; i++){
	squareR7[i] = new SquareB((300+(i*20)),((i*20)),20,20,([50,200,200,50]));
}

for (let i=0; i<1; i++){
	squareR8[i] = new SquareA((320+(i*20)),((i*20)),20,20,(255,0,0,50));
}

//

for (let i=0; i<9; i++){
	squareL0[i] = new SquareB((0+(i*20)),(20+(i*20)),20,20,([50,200,200,50]));
}

for (let i=0; i<8; i++){
	squareL1[i] = new SquareA((0+(i*20)),(40+(i*20)),20,20,(255,0,0,50));
}

for (let i=0; i<7; i++){
	squareL2[i] = new SquareB((0+(i*20)),(60+(i*20)),20,20,([50,200,200,50]));
}

for (let i=0; i<6; i++){
	squareL3[i] = new SquareA((0+(i*20)),(80+(i*20)),20,20,(255,0,0,50));
}

for (let i=0; i<5; i++){
	squareL4[i] = new SquareB((0+(i*20)),(100+(i*20)),20,20,([50,200,200,50]));
}

for (let i=0; i<4; i++){
	squareL5[i] = new SquareA((0+(i*20)),(120+(i*20)),20,20,(255,0,0,50));
}

for (let i=0; i<3; i++){
	squareL6[i] = new SquareB((0+(i*20)),(140+(i*20)),20,20,([50,200,200,50]));
}

for (let i=0; i<2; i++){
	squareL7[i] = new SquareA((0+(i*20)),(160+(i*20)),20,20,(255,0,0,50));
}

for (let i=0; i<1; i++){
	squareL8[i] = new SquareB((0+(i*20)),(180+(i*20)),20,20,([50,200,200,50]));
}

/*
for (let i=0; i<1; i++){
	squareL9[i] = new SquareA((0+(i*20)),(300+(i*20)),20,20,255);
}
*/

}


function draw() {

	background(0);
	tint(255, 127);

	for (let i=0; i<10; i++){
		squareA[i].show();
		squareA[i].update();
		squareB[i].show();
		squareB[i].update();
		squareC[i].show();
		squareC[i].update();
		squareD[i].show();
		squareD[i].update();
		squareE[i].show();
		squareE[i].update();
		squareF[i].show();
		squareF[i].update();
		squareG[i].show();
		squareG[i].update();
		squareH[i].show();
		squareH[i].update();
	}

	for (let i=0; i<9; i++){
		squareR0[i].show();
		squareR0[i].update();
}

	for (let i=0; i<8; i++){
		squareR1[i].show();
		squareR1[i].update();
}
	for (let i=0; i<7; i++){
		squareR2[i].show();
		squareR2[i].update();
}

	for (let i=0; i<6; i++){
		squareR3[i].show();
		squareR3[i].update();
}

	for (let i=0; i<5; i++){
		squareR4[i].show();
		squareR4[i].update();
}

	for (let i=0; i<4; i++){
		squareR5[i].show();
		squareR5[i].update();
}

	for (let i=0; i<3; i++){
		squareR6[i].show();
		squareR6[i].update();
}

	for (let i=0; i<2; i++){
		squareR7[i].show();
		squareR7[i].update();
}

	for (let i=0; i<1; i++){
		squareR8[i].show();
		squareR8[i].update();
}


//


for (let i=0; i<9; i++){
	squareL0[i].show();
	squareL0[i].update();
}
for (let i=0; i<8; i++){
	squareL1[i].show();
	squareL1[i].update();
}

for (let i=0; i<7; i++){
	squareL2[i].show();
	squareL2[i].update();
}

for (let i=0; i<6; i++){
	squareL3[i].show();
	squareL3[i].update();
}

for (let i=0; i<5; i++){
	squareL4[i].show();
	squareL4[i].update();
}

for (let i=0; i<4; i++){
	squareL5[i].show();
	squareL5[i].update();
}

for (let i=0; i<3; i++){
	squareL6[i].show();
	squareL6[i].update();
}

for (let i=0; i<2; i++){
	squareL7[i].show();
	squareL7[i].update();
}

for (let i=0; i<1; i++){
	squareL8[i].show();
	squareL8[i].update();
}


}
