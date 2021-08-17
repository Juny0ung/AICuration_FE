/*
	Project 2
	Name of Project: This is not an octopus
	Author: Junyoung Choi
	Date: 2020.06.25
*/

let mode = 0;					// default : 0, map : 1, gotoplay : 4
let wsc = 0;

var firebaseConfig = {
    apiKey: "AIzaSyCrLOHsSIqOoGtyNXjhIzDOMlTxVZtxtDA",
    authDomain: "id311-project-2.firebaseapp.com",
    databaseURL: "https://id311-project-2.firebaseio.com",
    projectId: "id311-project-2",
    storageBucket: "id311-project-2.appspot.com",
    messagingSenderId: "42461089004",
    appId: "1:42461089004:web:764f732b10927cd156e9c9",
    measurementId: "G-SCLV5MPZ9H"
};

//for user
let userMax = -1;
let user = {
	idnum: -1,
	id: "joonchoi518",
	password: "0000",
	name: "Junyoung",
	maxhp: 100,
  	money: 0,
  	level: 0,
	power: 10,
	type : "none"						// type of character  
};

//for map
let tmpMap = [];							// blocks
let p1 = {
	type : "none",
};
let p2 = {
	type : "none",
};
let blockKind = 1;							// 1 : default, 2 : bouncing, 3 : portal, 4 : destroyable, 0 : erase
let stage = 0;								// 0 : p1 choose, 1 : p2 choose, 2 : map making, 3 : complete


// Image
let eraserImg;
let saveImg;
let homeImg;
let backImg;
let pirateImg;
let pirate2Img;
let defaultImg;
let default2Img;
let knightImg;
let knight2Img;
let paladinImg;
let paladin2Img;

let tfont;
let lfont;

function preload() {
	eraserImg = loadImage('data/image/eraser.png');
	saveImg = loadImage('data/image/save.png');
	homeImg = loadImage('data/image/home.png');
	backImg = loadImage('data/image/arrow.png');
	pirateImg = loadImage('data/image/pirate.png');
	pirate2Img = loadImage('data/image/piratep2.png');
	defaultImg = loadImage('data/image/defaultp1.png');
	default2Img = loadImage('data/image/defaultp2.png');
	knightImg = loadImage('data/image/knight.png');
	knight2Img = loadImage('data/image/knightp2.png');
	paladinImg = loadImage('data/image/paladin.png');
	paladin2Img = loadImage('data/image/paladinp2.png');
	tfont = loadFont('data/font/MuseoModerno-Regular.ttf');
	lfont = loadFont('data/font/MuseoModerno-ExtraLight.ttf');
}


// called when loading the page
function initServer() {
	ws = new WebSocket("ws://localhost:8025/Octopus");
  
	ws.onopen = function () {
	  // Web Socket is connected, send data using send()
	  console.log("Ready...");
	  wsc = 1;
	};
  
	ws.onmessage = function (evt) {
	  var received_msg = evt.data;
	  console.log("Message is received..." + received_msg);
	};
  
	ws.onclose = function () {
	  // websocket is closed.
	  console.log("Connection is closed...");
	  wsc = 0;
	};
}


function initializeMax() {
	return firebase.database().ref('/users/').once('value',function(snapshot) {
		var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		userMax = keyList.length;
	});
}


function setLoggedin() {
	let header = document.getElementById("header");
	header.innerHTML = "";
	let title = document.createElement("div");
	title.className = "title";
	title.innerHTML = "<span class='titletext'>This is not an Octopus</span>";
	header.appendChild(title);
	let userinfo = document.createElement("div");
	userinfo.className = "login";
	userinfo.innerHTML = " <button id='logoutBtn'>log out</button> <span class='welcometext'>Welcome, " + user.name + "</span>";
	header.appendChild(userinfo);
}

function setLoggedout() {
	let header = document.getElementById("header");
	header.innerHTML = "";
	let title = document.createElement("div");
	title.className = "title";
	title.innerHTML = "<span class='titletext'>This is not an Octopus</span>";
	header.appendChild(title);
	let login = document.createElement("div");
	login.className = "login";
	let table = document.createElement("table");
	let tbody = document.createElement("tbody");
	let idrow = tbody.insertRow(0);
	let cell1 = idrow.insertCell(0);
	cell1.className = "logintext";
	cell1.innerHTML = "ID";
	cell1 = idrow.insertCell(1);
	cell1.innerHTML = "<input id='userid' type='text' style='width:100px'></input>";
	cell1 = idrow.insertCell(2);
	cell1.innerHTML = "<button id='loginBtn'>log in</button>"
	idrow = tbody.insertRow(1);
	cell1 = idrow.insertCell(0);
	cell1.className = "logintext";
	cell1.innerHTML = "password";
	cell1 = idrow.insertCell(1);
	cell1.innerHTML = "<input id='userpw' type='password' style='width:100px'></input>"
	cell1 = idrow.insertCell(2);
	cell1.innerHTML = "<button id='signBtn'>sign up</button>"
	table.appendChild(tbody);
	login.appendChild(table);
	header.appendChild(login);
}

function trylogin() {
	let inputid = document.getElementById('userid');
	let inputpw = document.getElementById('userpw');
	if(inputid.value == "" || inputpw.value == "") {
		return;
	}
	return firebase.database().ref('/users/').once('value',function(snapshot) {
    	var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		cnt = 0;
        for(var i = 0; i<keyList.length; i++) {
			var myKey = keyList[i];
            if(myValue[myKey].id == inputid.value && myValue[myKey].password == inputpw.value) {
				user.id = inputid.value;
				user.password = inputpw.value;
				user.idnum = myValue[myKey].idnum;
				user.level = myValue[myKey].level;
				user.maxhp = myValue[myKey].maxhp;
				user.money = myValue[myKey].money;
				user.power = myValue[myKey].power;
				user.name = myValue[myKey].name;
				user.type = myValue[myKey].type;
				cnt++;
				break;
            } 
		}
		if(cnt == 0) {
			inputpw.value = "";
			alert("Non-existent id or password is wrong!");
		} else {
			inputid.value = "";
			inputpw.value = "";
			mode = 0;
			setLoggedin();
		}
  
    });
}


function initPage() {
	if(user.idnum != -1) {
		setLoggedin();
	} else {
		setLoggedout();
	}
}


// menu function
function drawMenu() {
	fill(245,245,220);
	rectMode(CORNER);
	rect(50,300,150,150,10);
	rect(325,300,150,150,10);
	rect(600,300,150,150,10);
	fill(0);
	textAlign(CENTER,CENTER);
	textSize(28);
	text("Play with\nYour Data",125,375);
	text("Connect to\nServer", 400, 375);
	text("PVP in\nYour Map", 675, 375);
}

function mouseMenu() {
	if(mouseX >= 50 && mouseX <= 200 && mouseY >= 300 && mouseY <= 450) {
		if(user.idnum == -1) {
			alert("You are not logged in");
			return;
		}
		if(wsc != 1) {
			alert("Server is not connected");
			return;
		}
		mode = 4;
		if(user.type != "none") {
			ws.send(JSON.stringify(user));
		}
	} else if(mouseX >= 325 && mouseX <= 475 && mouseY >= 300 && mouseY <= 450) {
		wsc = 2;
		initServer();
	} else if(mouseX >= 600 && mouseX <= 750 && mouseY >= 300 && mouseY <= 450) {
		if(wsc != 1) {
			alert("Server is not connected");
			return;
		}
		mode = 1;
		initPlayer();
		initMap();
		blockKind = 1;
	}
	
}

function drawHomeBtn() {
	image(homeImg,740,10,50,50);
	image(backImg,10,10,50,50);
}

function mouseHomeBtn() {
	if(mouseX < 740 || mouseX > 790) return;
	if(mouseY < 10 || mouseY > 60) return;
	mode = 0;
}

function mouseBackBtn() {
	if(mouseX < 10 || mouseX > 60) return;
	if(mouseY < 10 || mouseY > 60) return;
	if(mode == 1) {
		if(stage == 0 || stage == 3) {
			mode = 0;
		} else {
			stage--;
		}
	} else {
		mode = 0;
	}
}


// map function
function initMap() {
	tmpMap = [];
	for(let i = 0; i < 20; i++) {
		tmpMap.push([]);
		for(let j = 0; j < 10; j++) {
			tmpMap[i].push(0);
		}
	}
}

function saveMap() {
	let res = {};
	res.blocks = [];
	for(let i = 0; i < tmpMap.length; i++) {
		for(let j = 0; j < tmpMap[0].length; j++) {
			res.blocks.push({
				x: i,
				y: j,
				type: tmpMap[i][j]
			});
		}
	}
	//console.log(JSON.stringify(p1) + "\n" + JSON.stringify(p2) + "\n" + JSON.stringify(res));
	ws.send(JSON.stringify(p1) + "\n" + JSON.stringify(p2) + "\n" + JSON.stringify(res));
	return true;
}

function validMap() {
	if(tmpMap.length == 0) {
		return false;
	}
	let p1sit = 0;
	let p2sit = 0;
	if(tmpMap[1][0] != 0 && (tmpMap[1][1] != 0 || tmpMap[1][2] != 0)) {
		alert("Player 1 can't be positioned");
		return false;
	}
	if(tmpMap[2][0] != 0 && (tmpMap[2][1] != 0 || tmpMap[2][2] != 0)) {
		alert("Player 1 can't be positioned");
		return false;
	}
	if(tmpMap[18][0] != 0 && (tmpMap[18][1] != 0 || tmpMap[18][2] != 0)) {
		alert("Player 2 can't be positioned");
		return false;
	}
	if(tmpMap[17][0] != 0 && (tmpMap[17][1] != 0 || tmpMap[17][2] != 0)) {
		alert("Player 2 can't be positioned");
		return false;
	}
	for(let i = 0; i < tmpMap.length; i++) {
		for(let j = 0; j < tmpMap[0].length; j++) {
			if((i == 1 || i == 2) && j != 0 && (tmpMap[i][j] != 0 && tmpMap[i][j] != 4)) {
				p1sit = 1;
			}
			if((i == 17 || i == 18) && j != 0 && (tmpMap[i][j] != 0 && tmpMap[i][j] != 4)) {
				p2sit = 1;
			}
		}
	}
	if(p1sit == 0) {
		alert("Player 1 can't be positioned");
		return false;
	}
	if(p2sit == 0) {
		alert("Player 2 can't be positioned");
		return false;
	}
	return true;
}

function drawMakeMap() {
	fill(0);
	textAlign(CENTER,CENTER);
	textSize(50);
	text("Draw Map", 400, 55);
	noStroke();
	fill(0,2,69);
	let x = 15;
	let y = 150;
	// draw map pic.
	rectMode(CORNER);
	rect(x,y,720,360);
	fill(200,70,27,80);
	rect(x + 36,y,72,360);
	fill(101,35,104,120);
	rect(x + 36 * 17,y,72,360);
	for(let i = 0; i < tmpMap.length; i++) {
		for(let j = 0; j < tmpMap[0].length; j++) {
			if(tmpMap[i][j] != 0) {
				if(tmpMap[i][j] == 1) {
					fill(61,23,24);
				} else if (tmpMap[i][j] == 2) {
					fill(0,128,128);
				} else if(tmpMap[i][j] == 3) {
					fill(55,238,17);
				} else if(tmpMap[i][j] == 4) {
					fill(109,41,44);
				}
				rect(x+i*36, y+j*36, 36, 36);
			}
		}
	}
	stroke(color(255,255,255,50));
	strokeWeight(1);
	for(let i = 1; i < 20; i++) {
		line(x + i*36, y, x + i * 36 , y + 360);
	}
	for(let i = 1; i < 10; i++) {
		line(x, y + i * 36, x + 720, y + i * 36);
	}

	// players position
	noStroke();
	textSize(30);
	textAlign(LEFT,CENTER);
	fill(200,70,27);
	text("P1",x + 36,y - 18);
	textAlign(RIGHT,CENTER);
	fill(101,35,104);
	text("P2",x + 36 * 19,y - 18);

	// draw which kind to draw
	stroke(0);
	fill(61,23,24);
	if(blockKind == 1) {
		strokeWeight(4);
		rect(745, 152, 40, 40);
	} else {
		strokeWeight(1);
		rect(745,150,40,40);
	}
	fill(0,128,128);
	if(blockKind == 2) {
		strokeWeight(4);
		rect(745, 192, 40, 40);
	} else if(blockKind < 2 && blockKind > 0){
		strokeWeight(1);
		rect(745, 194, 40, 40);
	} else {
		strokeWeight(1);
		rect(745, 190, 40, 40);
	}
	fill(55,238,17);
	if(blockKind == 3) {
		strokeWeight(4);
		rect(745, 232, 40, 40);
	} else if(blockKind < 3 && blockKind > 0){
		strokeWeight(1);
		rect(745, 234, 40, 40);
	} else {
		strokeWeight(1);
		rect(745, 230, 40, 40);
	}
	fill(109,41,44);
	if(blockKind == 4) {
		strokeWeight(4);
		rect(745, 272, 40, 40);
	} else if(blockKind < 4 && blockKind > 0){
		strokeWeight(1);
		rect(745, 274, 40, 40);
	} else {
		strokeWeight(1);
		rect(745, 270, 40, 40);
	}
	fill(245,245,220);
	if(blockKind == 0) {
		strokeWeight(4);
		rect(745, 312, 40, 40);
		image(eraserImg, 745, 312, 40, 40);
	} else {
		strokeWeight(1);
		rect(745, 314, 40, 40);
		image(eraserImg, 745, 314, 40, 40);
	}
	strokeWeight(1);
	rect(745, 354, 40, 40);
	image(saveImg, 750, 359, 30, 30);
}

function mouseDrawMap() {
	let x = 15;
	let y = 150;
	if(mouseX >= x + 720 || mouseX < x) return;
	if(mouseY >= y + 360 || mouseY < y) return;
	let cx = Math.floor((mouseX - x) / 36);
	let cy = Math.floor((mouseY - y) / 36);
	
	tmpMap[cx][cy] = blockKind;
}

function drawcanonList(i) {
	fill(245,245,220);
	x = 45 + i * 180;
	rectMode(CORNER);
	rect(x,400,150,170,10);
	fill(0);
	noStroke();
	textSize(15);
	textAlign(CENTER, CENTER);
	if(i == 0) {
		image(defaultImg,x,390,140,140);
		text("citizen\npower : 10\nHP : 100",x + 75,535);
	} else if(i == 1) {
		image(knightImg,x,390,140,140);
		text("knight\npower : 20\nHP : 100",x + 75,535);
	} else if(i == 2) {
		image(paladinImg,x,390,140,140);
		text("paladin\npower : 10\nHP : 150",x + 75,535);
	} else if(i == 3) {
		image(pirateImg,x,390,140,140);
		text("pirate\npower : 10\nHP : 100",x + 75,535);
	}
	stroke(0);
}

function initPlayer() {
	stage = 0;
	p1.type = "none";
	p2.type = "none";
}

function drawp1p2() {
	fill(0);
	textAlign(CENTER,CENTER);
	textSize(50);
	text("Choose Characters", 400, 55);
	drawcanonList(0);
	drawcanonList(1);
	drawcanonList(2);
	drawcanonList(3);
	fill(0);
	textSize(50);
	textAlign(CENTER, CENTER);
	text("vs",400,250);
	textSize(40);
	if(stage == 0) {
		fill(200,70,27);
		noStroke();
	}
	text("P1",50,88);
	fill(0);
	if(stage == 1) {
		noStroke();
		fill(101,35,104);
	}
	text("P2",750,88);
	textSize(20);
	textAlign(LEFT,TOP);
	if(stage == 0) {
		fill(200,70,27);
		noStroke();
	} else {
		fill(0);
		stroke(0);
	}
	if(p1.type != "none") {
		if(p1.type == "default") {
			text("P1",50,400);
			image(defaultImg,-30,50,400,400);
		} else if(p1.type == "knight") {
			text("P1",230,400);
			image(knightImg,-30,50,400,400);
		} else if(p1.type == "paladin") {
			text("P1",410,400);
			image(paladinImg,-30,50,400,400);
		} else if(p1.type == "pirate") {
			text("P1",590,400);
			image(pirateImg,-30,50,400,400);
		}
	}
	textAlign(RIGHT,TOP);
	if(stage == 1) {
		fill(101,35,104);
		noStroke();
	} else {
		fill(0);
		stroke(0);
	}
	if(p2.type != "none") {
		if(p2.type == "default") {
			text("P2",190,400);
			image(default2Img,420,50,400,400);
		} else if(p2.type == "knight") {
			text("P2",370,400);
			image(knight2Img,420,50,400,400);
		} else if(p2.type == "paladin") {
			text("P2",550,400);
			image(paladin2Img,420,50,400,400);
		} else if(p2.type == "pirate") {
			text("P2",730,400);
			image(pirate2Img,420,50,400,400);
		}
	}
	fill(0);
}

function mousechoosePCharacter(cp) {
	if(mouseX >= 45 && mouseX <= 195 && mouseY >= 400 && mouseY <= 570) {
		if(cp.type == "default") {
			stage++;
		} else {
			cp.type = "default";
			cp.power = 10;
			cp.maxhp = 100;
		}
	} else if(mouseX >= 225 && mouseX <= 375 && mouseY >= 400 && mouseY <= 570) {
		if(cp.type == "knight") {
			stage++;
		} else {
			cp.type = "knight";
			cp.power = 20;
			cp.maxhp = 100;
		}
	} else if(mouseX >= 405 && mouseX <= 555 && mouseY >= 400 && mouseY <= 570) {
		if(cp.type == "paladin") {
			stage++;
		} else {
			cp.type = "paladin";
			cp.power = 10;
			cp.maxhp = 150;
		}
	} else if(mouseX >= 585 && mouseX <= 735 && mouseY >= 400 && mouseY <= 570) {
		if(cp.type == "pirate") {
			stage++;
		} else {
			cp.type = "pirate";
			cp.power = 10;
			cp.maxhp = 100;
		}
	}
	if(stage == 2) {
		initMap();
		blockKind = 1;
	}
}

function mouseChooseBlock() {
	if(mouseX > 745 && mouseX < 785 && mouseY > 150 && mouseY < 190) {
		blockKind = 1;
	} else if(mouseX > 745 && mouseX < 785 && mouseY > 190 && mouseY < 230) {
		blockKind = 2;
	} else if(mouseX > 745 && mouseX < 785 && mouseY > 230 && mouseY < 270) {
		blockKind = 3;
	} else if(mouseX > 745 && mouseX < 785 && mouseY > 270 && mouseY < 310) {
		blockKind = 4;
	} else if(mouseX > 745 && mouseX < 785 && mouseY > 310 && mouseY < 350) {
		blockKind = 0;
	} else if(mouseX > 745 && mouseX < 785 && mouseY > 350 && mouseY < 390) {
		if(!validMap()) {
			return;
		}
		saveMap();
		initMap();
		stage++;
		blockKind = 1;
	}
}

function showDescription() {
	let desc = document.getElementById("blockdesc");
	let newRow = desc.insertRow(0);
	let newBlock = newRow.insertCell(0);
	let newDesc = newRow.insertCell(1);
	newRow.className = "tbline";
	newBlock.className = "basicB block";
	newDesc.className = "descell";
	newDesc.innerHTML = "This is basic block. Your cannon can stand here.";
	
	newRow = desc.insertRow(1);
	newRow.className = "tbline";
	newBlock = newRow.insertCell(0);
	newDesc = newRow.insertCell(1);
	newBlock.className = "bounceB block";
	newDesc.className = "descell";
	newDesc.innerHTML = "This is bouncing block. When your bomb reaches to the block, it will be bounced.";

	newRow = desc.insertRow(2);
	newRow.className = "tbline";
	newBlock = newRow.insertCell(0);
	newDesc = newRow.insertCell(1);
	newBlock.className = "portalB block";
	newDesc.className = "descell";
	newDesc.innerHTML = "This is portal block. When your bomb reaches to the block, it will go to another portal block.";

	newRow = desc.insertRow(3);
	newRow.className = "tbline";
	newBlock = newRow.insertCell(0);
	newDesc = newRow.insertCell(1);
	newBlock.className = "destroyableB block";
	newDesc.className = "descell";
	newDesc.innerHTML = "This is weak block. You can destroy the block with the bomb. You can't stand here.";
}

// play with account
function drawEachCandidate(i,j,showImg) {
	fill(245,245,220);
	let x = 80 + i * 340;
	let y = 110 + j * 240; 
	rect(x, y, 300, 200, 10);
	image(showImg,x,y,160,160);
	fill(0);
	textSize(20);
	textAlign(RIGHT,CENTER);
	let canonName;
	let canonPower = 10;
	let canonHP = 100;
	let canonDes;
	let code = 2 * i + j;
	if(code == 0 ) {
		canonName = "Citizen";
		canonDes = "Citizen is ordinary\nman, nothing special.\nBut It works hard.";
	}
	else if(code == 1) {
		canonName = "Paladin";
		canonHP += 50;
		canonDes = "   Paladin has hard\n   body. No one can\n   easily harm it."
	}
	else if(code == 2) {
		canonName = "Knight";
		canonPower += 10;
		canonDes = "Mighty knight is very\npowerful. Its attack\nwill be critical."
	}
	else if(code == 3) {
		canonName = "Pirate";
		canonDes = "  Pirate loves money.\n  It takes gold from\n  enemy a lot."
	}
	text("Power : ",x + 250,y + 65);
	text("HP : ", x + 250, y + 95);
	textAlign(LEFT,CENTER);
	text(parseInt(canonPower), x + 250, y + 65);
	text(parseInt(canonHP), x + 250, y + 95);
	textSize(15);
	noStroke();
	text(canonDes,x + 140, y + 165);
	stroke(0);
	textAlign(CENTER,CENTER);
	textSize(30);
	text(canonName,x + 80, y + 160);
}

function drawChooseCharacter() {
	fill(0);
	textAlign(CENTER, CENTER);
	textSize(50);
	text("Choose Your Character", 400, 55);
	fill(255);
	rectMode(CORNER);
	drawEachCandidate(0,0,defaultImg);
	drawEachCandidate(1,0,knightImg);
	drawEachCandidate(0,1,paladinImg);
	drawEachCandidate(1,1,pirateImg);
}

function mouseChooseCharacter() {
	if(mouseX >= 80 && mouseX <= 380 && mouseY >= 110 && mouseY <= 310) {
		//alert("choose default");
		initCharacter("default");
	}
	if(mouseX >= 80 && mouseX <= 380 && mouseY >= 350 && mouseY <= 550) {
		//alert("choose paladin");
		initCharacter("paladin");
	}
	if(mouseX >= 420 && mouseX <= 720 && mouseY >= 110 && mouseY <= 310) {
		//alert("choose knight");
		initCharacter("knight");
	}
	if(mouseX >= 420 && mouseX <= 720 && mouseY >= 350 && mouseY <= 550) {
		//alert("choose pirate");
		initCharacter("pirate");
	}
	console.log(user);
}

function initCharacter(choose) {
	user.type = choose;
	user.level = 0;
	if(choose == "knight") {
		user.power += 10;
	} else if(choose == "paladin") {
		user.maxhp += 50;
	}

	return firebase.database().ref('/users/').once('value',function(snapshot) {
    	var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		cnt = 0;
        for(var i = 0; i<keyList.length; i++) {
			var myKey = keyList[i];
            if(myValue[myKey].id == user.id) {
				let curUser = firebase.database().ref('/users/'+myKey);
				let incP = 10;
				let incH = 100;
				if(choose == "knight") {
					incP = 20;
				} else if(choose == "paladin") {
					incH = 150;
				}
				curUser.update({
					type: choose,
					power: incP,
					maxhp: incH,
					level: 0
				});
				ws.send(JSON.stringify(user));
				return;
            } 
		}
    });
}

function drawGotoPlay() {
	fill(0);
	textSize(50);
	textAlign(CENTER, CENTER);
	text("Go to Processing Application\nto Play Game!!", 400, 300);
}



function setup (){
  createCanvas(800, 600);
  textFont(tfont);
}

function draw(){
  background(222,239,255);
  textSize(15);
  textAlign(LEFT,CENTER);
  fill(0);
  textFont(lfont);
  noStroke();
  if(wsc == 1) {
	text("connection success",5,585);
  } else if(wsc == 0) {
	  text("connection failed",5,585);
  } else {
	  text("try connecting...",5,585);
  }
  stroke(0);
  textFont(tfont);
  if(mode == 0) {
	textSize(70);
	fill(0);
	textAlign(CENTER,CENTER);
	text("We are Not Octopuses",400,160);
	drawMenu();
  } else {
	  drawHomeBtn();
  }
  if(mode == 1) {
	  if(stage < 2) {
		drawp1p2();
	  } else if (stage == 2) {
		drawMakeMap();
	  } else {
		drawGotoPlay();
	  }
  } else if(mode == 4) {
	  if(user.type == "none") {
		  drawChooseCharacter();
	  } else {
		  drawGotoPlay();
	  }
  }
}

function keyPressed()
{
  if ((key=='C' || key == 'c') && mode == 1 && stage == 2)
  {
	initMap();
  } else if((key == 'S' || key == 's') && mode == 1 && stage == 2 && validMap()) {
	saveMap();
	initMap();
	stage++;
	blockKind = 1;
  } else if((key == 1) && mode == 1 && stage == 2) {
	blockKind = 1;
  } else if((key == 2) && mode == 1 && stage == 2) {
	blockKind = 2;
  } else if((key == 3) && mode == 1 && stage == 2) {
	blockKind = 3;
  } else if((key == 4) && mode == 1 && stage == 2) {
	blockKind = 4;
  } else if((key == 0) && mode == 1 && stage == 2) {
	blockKind = 0;
  }
}

function mouseReleased() {
	if(mode == 1) {
		if(stage == 0) {
			mousechoosePCharacter(p1);
		} else if(stage == 1) {
			mousechoosePCharacter(p2);
		} else if(stage == 2) {
			mouseChooseBlock();
		}
	}
	if(mode == 4) {
		mouseChooseCharacter();
	}
	if (mode == 0) {
		mouseMenu();
	}	else {
		mouseHomeBtn();
		mouseBackBtn();
	}
	let desT = document.getElementById("blockdesc");
	let rows = desT.rows.length;
	for(let i = 0; i < rows; i++) {
		desT.deleteRow(0);
	}
	if(mode == 1 && stage == 2) {
		showDescription();
	}
}

function mousePressed()
{
  if (mode == 1 && stage == 2) {
	mouseDrawMap();
  }

}

function mouseDragged()
{
  if (mode == 1 && stage == 2) {
	let x = 15;
	let y = 150;
	if(mouseX >= x + 720 || mouseX < x) return;
	if(mouseY >= y + 360 || mouseY < y) return;
	let cx = Math.floor((mouseX - x) / 36);
	let cy = Math.floor((mouseY - y) / 36);
	tmpMap[cx][cy] = blockKind;
  }
  
}


$(document).on('click','#logoutBtn',function() {
    user.idnum = -1;
	setLoggedout();
	mode = 0;
});

$(document).on('click','#loginBtn',function() {
	trylogin();
});

$(document).on('click','#signBtn',function() {
	location.replace("?#popup1");
	let newName = document.getElementById("nameInput");
	let newID = document.getElementById("idInput");
	let newpw = document.getElementById("pwInput");
	let newconfirm = document.getElementById("confirmInput");
	newName.value = "";
	newID.value = "";
	newpw.value = "";
	newconfirm.value = "";
});

$(document).on('click','#regiBtn',function() {
	let newName = document.getElementById("nameInput");
	let newID = document.getElementById("idInput");
	let newpw = document.getElementById("pwInput");
	let newconfirm = document.getElementById("confirmInput");
	if(newName.value == "") {
		alert("You should write name");
		return;
	}
	if(newID.value == "") {
		alert("You should write ID");
		return;
	}
	if(newpw.value == "") {
		alert("You should write password");
		return;
	}
	if(newpw.value != newconfirm.value) {
		alert("Password is not same");
		return;
	}

	return firebase.database().ref('/users/').once('value',function(snapshot) {
    	var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		cnt = 0;
        for(var i = 0; i<keyList.length; i++) {
			var myKey = keyList[i];
            if(myValue[myKey].id == newID.value) {
				cnt++;
            } 
		}
		if(cnt == 0) {
			let newUser = firebase.database().ref('/users/').push();
			newUser.set({
				id: newID.value,
				idnum: userMax++,
				level: 0,
				maxhp: 100,
				money: 0,
				name: newName.value,
				password: newpw.value,
				power: 10,
				type: "none"
			});

			location.replace("#");
		} else {
			alert("This ID is already existed");
		}
    });
});

$(document).keyup(function(key) {
	if (key.keyCode == 13) {
		if(user.idnum == -1) {
			trylogin();
		}
	}
});


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

initServer();
initializeMax();
initPage();
initMap();