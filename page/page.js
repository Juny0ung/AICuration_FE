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
function fill_recommendation() {
	words = get_recommendation();
	document.getElementById("recommendc").innerHTML = words[0];
	document.getElementById("fieldc").innerHTML = words[1];
	document.getElementById("jobc").innerHTML = words[2];
	document.getElementById("programmc").innerHTML = words[3];
}

function get_recommendation() {
	return ["AB","CD","EF","GH"];

	// get recommendation by python API
}



//table
// variables for table
let tbcont = [
	[0, "Human Matter"],
	[1, "토모큐브"],
	[2, "미세먼지 정화 장치"],
	[0, "Human Heart"],
	[1, "인공지능 피아노"],
	[2, "트랜스 윌"],
	[3, "Nirsit"],
	[0, "Human Body"],
	[1, "로봇구동/감속기"],
	[2, "ELBOW-EXO"],
	[3, "센서류+제어류"],
	[4, "IMU 센서장갑"],
	[5, "엔코더"],
	[6, "로봇 피부"],
	[7, "햅틱 다이얼"],
	[8, "로봇 성체"],
	[0, "Human Industry"],
	[1, "스마트팜"],
	[2, "도시 디오라마"],
	[3, "도시 스케일지도"],
	[4, "Dehazing S/W 기술"],
	[5, "두더지봇"],
	[6, "바인로봇"],
	[7, "이튜브"]
];

// https://xmobile.tistory.com/entry/HTML-table-Rowspan-%EB%8F%99%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-dynamicRowspan
function fill_table() {
	let table = document.getElementById("path_info");
	
	let step = 0;
	let newRow;
	let newInd;
	let newName;
	let newCont;
	for(step = 0; step < 24; step++) {
		newRow = table.insertRow(step);
		if (tbcont[step][0] == 0) {
			newName = newRow.insertCell(0);
			newName.setAttribute("colspan",2);
			newName.innerHTML = tbcont[step][1];
		} else {
			newInd = newRow.insertCell(0);
			newName = newRow.insertCell(1);
			newCont = newRow.insertCell(2);
			newInd.innerHTML = tbcont[step][0].toString();
			newName.innerHTML = tbcont[step][1];
		}
	}

}



// personal info

let person = {
	"year": "2021",
	"month": "08",
	"day": "31",
	"school": "KAIST",
	"grade": "6",
	"gender": "남",
	"name": "홍길동"
};

function fill_personal_info() {
	let table = document.getElementById("per_info");

	let newRow = table.insertRow(0);
	let newCell1 = newRow.insertCell(0);
	let newCell2 = newRow.insertCell(1);
	newCell1.innerHTML = "방문일";
	newCell2.innerHTML = person["year"] + "." + person["month"] + "." + person["day"];

	newRow = table.insertRow(0);
	newCell1 = newRow.insertCell(0);
	newCell2 = newRow.insertCell(1);
	newCell1.innerHTML = "학교/소속";
	newCell2.innerHTML = person["school"];

	newRow = table.insertRow(0);
	newCell1 = newRow.insertCell(0);
	newCell2 = newRow.insertCell(1);
	newCell1.innerHTML = "학년";
	newCell2.innerHTML = person["grade"];

	newRow = table.insertRow(0);
	newCell1 = newRow.insertCell(0);
	newCell2 = newRow.insertCell(1);
	newCell1.innerHTML = "성별";
	newCell2.innerHTML = person["gender"];

	newRow = table.insertRow(0);
	newCell1 = newRow.insertCell(0);
	newCell2 = newRow.insertCell(1);
	newCell1.innerHTML = "이름";
	newCell2.innerHTML = person["name"];

}

function get_personal_info() {
	//update personal information or get information
	return person;
}


fill_path_analysis();
fill_recommendation();
fill_table();
fill_personal_info();

// https://www.patrick-wied.at/static/heatmapjs/