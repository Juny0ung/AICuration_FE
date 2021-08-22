let maxTime = 30;
let maxLen = 290;

//path analysis
function fill_path_analysis() {
	let desc = document.getElementById("analysisc");
	desc.innerHTML = get_path_analysis();
}

function get_path_analysis() {
	return "ABCDEFG";

	// get analysis by python API
}



// recommendation
async function fill_recommendation() {
	let words = await get_recommendation();
	document.getElementById("fieldc").innerHTML = words[0];
	document.getElementById("majorc").innerHTML = words[1];
	document.getElementById("jobc").innerHTML = words[2];
	document.getElementById("programmc").innerHTML = words[3];
}

async function get_recommendation() {
	
	let result = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio dui, rhoncus nec condimentum a, auctor sed nunc. Nulla tincidunt, enim quis rutrum facilisis, nunc felis commodo dolor, ut commodo ante risus in dui. Nunc auctor, elit vitae rhoncus elementum, arcu ipsum vehicula erat, eu condimentum quam urna vel ante. Etiam tempor ac risus at sodales. Nunc gravida massa a fringilla vulputate. Morbi in sapien finibus, imperdiet sem nec, cursus purus. Morbi sit amet accumsan lectus, pretium euismod justo. Etiam in fringilla augue. Mauris bibendum congue finibus. Sed ultricies dolor magna, in maximus metus facilisis quis. Nunc sed dignissim ante. Etiam facilisis consectetur fermentum. In hac habitasse platea dictumst.",
		"Maecenas a blandit lorem, vel euismod metus. Quisque fringilla tempus erat nec feugiat. Donec molestie eget mauris et consequat. Sed pellentesque purus ac nisi condimentum lobortis. Duis hendrerit, sem non lacinia sodales, mauris magna consectetur mauris, efficitur gravida tellus erat eget augue. Duis viverra risus lectus, non tincidunt urna aliquet ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, neque at accumsan pharetra, libero neque auctor dolor, non tempor nibh enim eget turpis. Fusce velit eros, posuere et tortor nec, auctor aliquet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras condimentum ipsum nec consequat rhoncus.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non imperdiet diam. Sed quis augue lacinia nulla maximus aliquam vitae at nulla. Aliquam in velit et nunc tempor mollis. Nulla a molestie augue. Donec tincidunt, lacus eget pretium placerat, quam odio laoreet justo, vitae posuere justo massa eget lacus. Proin fringilla massa ipsum, sed vehicula ipsum lacinia in. Etiam aliquam arcu nunc, a auctor lacus tincidunt finibus. Pellentesque in commodo orci. Aliquam a dui ac nisi blandit consequat. Praesent imperdiet odio molestie mauris lobortis, ac convallis erat sodales. Maecenas feugiat gravida nulla. Curabitur viverra fringilla pulvinar. Nullam eu ipsum sed dolor semper semper. Praesent scelerisque mauris at risus varius, eu viverra lorem congue.",
		"Integer mollis commodo gravida. Vivamus imperdiet mollis tempus. Pellentesque auctor purus vel porta semper. Morbi molestie lectus est, vel feugiat est semper nec. Cras rutrum faucibus gravida. Fusce eget elit nulla. Proin sed interdum lectus. In molestie felis ut odio viverra, eu semper augue volutpat. Morbi et erat tristique, tempus purus id, aliquet urna."
	];
	
	return result;

	// get recommendation by python API
}



//table
// variables for table
let tbcont1 = [
	[0, "Human Matter"],
	[1, "토모큐브"],
	[2, "에어 스크러버"],
	[0, "Human Heart"],
	[3, "인공지능 피아노"],
	[4, "트랜스 월"],
	[0, "Human Body"],
	[5, "널싯"],
	[6, "모터"],
	[7, "기어 감속기"],
	[8, "동력 전달장치"],
	[9, "센서 부착 다리"],
	[10, "알버트 휴보"],
	[11, "워크온 슈트"],
	[12, "휴보FX-2"],
	[13, "휴보KHR-3"],
	[14, "소프트 엔젤슈트"],
	[15, "엑소 부스터"],
	[16, "엘보우 엑소"],
	[17, "햅틱 다이얼"],
	[18, "회전핸들"],
	[19, "센서 글로브"],
	[20, "로봇 피부"],
	[21, "보행 시뮬레이션"],
	[0, "Human Industry"],
	[22, "두더지봇"],
	[23, "이튜브"],
	[24, "스마트팜"],
	[25, "디헤이징 시스템"],
	[26, "바인 로봇"],
	[27, "인터랙티브 시티"],
	[0, "Human Universe"],
	[28, "인공위성의 눈"],
	[29, "스페이스 스크린"],
	[30, "자이로 게임"],
	[31, "인공위성 모형"]
];

let tbcont2 = [
	[0, "Human Matter", "Human Heart"],
	[1, "토모큐브", 3, "인공지능 피아노"],
	[2, "에어 스크러버", 4, "트랜스 월"],
	[0, "Human Body"],
	[5, "널싯", 14, "소프트 엔젤슈트"],
	[6, "모터", 15, "엑소 부스터"],
	[7, "기어 감속기", 16, "엘보우 엑소"],
	[8, "동력 전달장치", 17, "햅틱 다이얼"],
	[9, "센서 부착 다리", 18, "회전핸들"],
	[10, "알버트 휴보", 19, "센서 글로브"],
	[11, "워크온 슈트", 20, "로봇 피부"],
	[12, "휴보FX-2", 21, "보행 시뮬레이션"],
	[13, "휴보KHR-3"],
	[0, "Human Industry"],
	[22, "두더지봇", 25, "디헤이징 시스템"],
	[23, "이튜브", 26, "바인 로봇"],
	[24, "스마트팜", 27, "인터랙티브 시티"],
	[0, "Human Universe"],
	[28, "인공위성의 눈", 30, "자이로 게임"],
	[29, "스페이스 스크린", 31, "인공위성 모형"],
];

let path_time_length = [
	[3, 5],
	[2, 4],
	[1, 6],
	[3, 8],
	[3, 5],
	[4, 5],
	[3, 7],
	[9, 5],
	[3, 15],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
	[3, 5],
];

// https://xmobile.tistory.com/entry/HTML-table-Rowspan-%EB%8F%99%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-dynamicRowspan
function fill_table() {
	let windowWidth = window.innerWidth;
	if(windowWidth < 768) {
		fill_table1().catch(e => {console.log('There has been a problem with table: ' + e.message)});
	} else {
		fill_table2().catch(e => {console.log('There has been a problem with table: ' + e.message)});
	}
}

async function fill_table1() {
	let tlength = await get_table();

	let table = document.getElementById("path_info");
	
	let step = 0;
	let newRow;
	let newName;
	let tmpcont;

	for(step = 0; step < tbcont1.length; step++) {
		newRow = table.insertRow(step);
		if (tbcont1[step][0] == 0) {
			newName = newRow.insertCell(0);
			newName.setAttribute("class", "path_title");
			newName.innerHTML = tbcont1[step][1];
		} else {
			newName = newRow.insertCell(0);
			tmpcont = "<div class='path_numbering'>" + tbcont1[step][0].toString() + "</div>";
			tmpcont += "<div class='path_name'>" + tbcont1[step][1] + "</div>";
			tmpcont += "<div class='path_bars'>";
			tmpcont += "<div class='path_top'>";
			tmpwidth = parseInt(tlength[tbcont1[step][0]-1][0] / maxTime * maxLen).toString();
			tmpcont += "<div style='float:left; height:20px; background-color:#B9DAF9; width:" + tmpwidth + "px; margin-right:10px'></div>";
			tmpcont += "<div class='path_time'>" + tlength[tbcont1[step][0]-1][0] + "분</div>";
			tmpcont += "</div>";
			tmpcont += "<div class='path_bottom'>";
			tmpwidth = parseInt(tlength[tbcont1[step][0]-1][1] / maxTime * maxLen).toString();
			tmpcont += "<div style='float:left; height:20px; background-color:#DDDDDD; width:" + tmpwidth + "px; margin-right:10px'></div>";
			tmpcont += "<div class='path_time'>" + tlength[tbcont1[step][0]-1][1] + "분</div>";
			tmpcont += "</div>";
			tmpcont += "</div>";
			newName.innerHTML = tmpcont;
			newName.setAttribute("class", "path_content");
		}
	}
}

async function fill_table2() {
	let tlength = await get_table();

	let table = document.getElementById("path_info");
	
	let step = 0;
	let newRow;
	let newName;
	let tmpcont;
	let tmpwidth;
	
	for(step = 0; step < tbcont2.length; step++) {
		newRow = table.insertRow(step);
		if (tbcont2[step][0] == 0) {
			newName = newRow.insertCell(0);
			newName.setAttribute("class", "path_title");
			newName.innerHTML = tbcont2[step][1];
			if (tbcont2[step].length > 2) {
				newName = newRow.insertCell(0);
				newName.setAttribute("class", "path_title");
				newName.innerHTML = tbcont2[step][2];
			} else {
				newName.setAttribute("colspan", 2);
			}
		} else {
			newName = newRow.insertCell(0);
			tmpcont = "<div class='path_numbering'>" + tbcont2[step][0].toString() + "</div>";
			tmpcont += "<div class='path_name'>" + tbcont2[step][1] + "</div>";
			tmpcont += "<div class='path_bars'>";
			tmpcont += "<div class='path_top'>";
			tmpwidth = parseInt(tlength[tbcont2[step][0]-1][0] / maxTime * maxLen).toString();
			tmpcont += "<div style='float:left; height:20px; background-color:#B9DAF9; width:" + tmpwidth + "px; margin-right:10px'></div>";
			tmpcont += "<div class='path_time'>" + tlength[tbcont2[step][0]-1][0] + "분</div>";
			tmpcont += "</div>";
			tmpcont += "<div class='path_bottom'>";
			tmpwidth = parseInt(tlength[tbcont2[step][0]-1][1] / maxTime * maxLen).toString();
			tmpcont += "<div style='float:left; height:20px; background-color:#DDDDDD; width:" + tmpwidth + "px; margin-right:10px'></div>";
			tmpcont += "<div class='path_time'>" + tlength[tbcont2[step][0]-1][1] + "분</div>";
			tmpcont += "</div>";
			tmpcont += "</div>";
			newName.innerHTML = tmpcont;
			newName.setAttribute("class", "path_content");
			if (tbcont2[step].length > 2) {
				newName = newRow.insertCell(1);
				tmpcont = "<div class='path_numbering'>" + tbcont2[step][2].toString() + "</div>" 
				tmpcont += "<div class='path_name'>" + tbcont2[step][3] + "</div>";
				tmpcont += "<div class='path_bars'>";
				tmpcont += "<div class='path_top'>";
				tmpwidth = parseInt(tlength[tbcont2[step][2]-1][0] / maxTime * maxLen).toString();
				tmpcont += "<div style='float:left; height:20px; background-color:#B9DAF9; width:" + tmpwidth + "px; margin-right:10px'></div>";
				tmpcont += "<div class='path_time'>" + tlength[tbcont2[step][2]-1][0] + "분</div>";
				tmpcont += "</div>";
				tmpcont += "<div class='path_bottom'>";
				tmpwidth = parseInt(tlength[tbcont2[step][2]-1][1] / maxTime * maxLen).toString();
				tmpcont += "<div style='float:left; height:20px; background-color:#DDDDDD; width:" + tmpwidth + "px; margin-right:10px'></div>";
				tmpcont += "<div class='path_time'>" + tlength[tbcont2[step][2]-1][1] + "분</div>";
				tmpcont += "</div>";
				tmpcont += "</div>";
				newName.innerHTML = tmpcont;
				newName.setAttribute("class", "path_content");
			}
		}
	}
}

async function get_table() {
	//update path time length value
	return path_time_length;
}



// personal info

let personal_info = {
	"year": "2021",
	"month": "08",
	"day": "31",
	"school": "KAIST",
	"grade": "6",
	"gender": "남",
	"name": "홍길동"
};

async function fill_personal_info() {
	let person = await get_personal_info();
	let table = document.getElementById("per_info");

	let newRow = table.insertRow(0);
	let newCell1 = newRow.insertCell(0);
	let newCell2 = newRow.insertCell(1);
	newCell1.innerHTML = "방문일";
	newCell1.setAttribute('class','per_title');
	newCell2.innerHTML = person["year"] + "." + person["month"] + "." + person["day"];
	newCell2.setAttribute('class','per_content');

	newCell1 = newRow.insertCell(2);
	newCell2 = newRow.insertCell(3);
	newCell1.innerHTML = "학교";
	newCell1.setAttribute('class','per_title');
	newCell2.innerHTML = person["school"];
	newCell2.setAttribute('class','per_content');

	newCell1 = newRow.insertCell(4);
	newCell2 = newRow.insertCell(5);
	newCell1.innerHTML = "이름";
	newCell1.setAttribute('class','per_title');
	newCell2.innerHTML = person["name"];
	newCell2.setAttribute('class','per_content');

	newCell1 = newRow.insertCell(6);
	newCell2 = newRow.insertCell(7);
	newCell1.innerHTML = "학년";
	newCell1.setAttribute('class','per_title');
	newCell2.innerHTML = person["grade"];
	newCell2.setAttribute('class','per_content');

	newCell1 = newRow.insertCell(8);
	newCell2 = newRow.insertCell(9);
	newCell1.innerHTML = "성별";
	newCell1.setAttribute('class','per_title');
	newCell2.innerHTML = person["gender"];
	newCell2.setAttribute('class','per_content');

}

async function get_personal_info() {
	//update personal information or get information
	let person = personal_info;

	return person;
}

async function fill_heatmap() {
	//update heatmap
	let imgsrc = await get_heatmap();
	document.getElementById("heatmap").src = imgsrc;
}

async function get_heatmap() {
	//get heatmap img as "path.svg"
	let imgsrc = "path.svg";
	return imgsrc;
}


fill_recommendation().catch(e => {console.log('There has been a problem with recommendation: ' + e.message)});
//fill_table1().catch(e => {console.log('There has been a problem with table: ' + e.message)});
fill_table();
fill_personal_info().catch(e => {console.log('There has been a problem with personal information: ' + e.message)});
fill_heatmap().catch(e => {console.log('There has been a problem with map: ' + e.message)});
// https://www.patrick-wied.at/static/heatmapjs/


$(window).resize(function() {
	let windowWidth = window.innerWidth;
	$('#path_info').empty();
	if(windowWidth < 768) {
		fill_table1().catch(e => {console.log('There has been a problem with table: ' + e.message)});
	} else {
		fill_table2().catch(e => {console.log('There has been a problem with table: ' + e.message)});
	}
})