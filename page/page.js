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
recommendations = {
	"토모큐브": [
		"생물체에 관심이 많은 예비 생명공학자",
		"Human-Matter 존의 3차원 홀로그래피 현미경 체험 콘텐츠인 ‘토모큐브’관에서 많은 시간을 할애하고, 살아있는 세포를 체험하는데 흥미를 보이셨네요.<br>3D 홀로그래피 현미경은 기존의 현미경으로 불가능했던 살아있는 세포에 대한 생생한 관측을 가능하게 하는 기술로, 레이저 광선을 이용하여 입체적인 촬영을 가능하게 하는 광학기술입니다. 최근에는 AI(인공지능)를 접목시킨 스마트현미경으로 발전하여 각종 질병에 대한 데이터를 구축하고 질병 진단을 위해 활용할 수 있도록 발전하고 있지요.<br>앞으로도 의학, 생물학, 임상병리학과 같은 학문 분야, 또한 이를 활용한 산업 분야에 관심을 가져보면 좋겠네요.",
		"미생물학과, 생명공학과, 생물학과, 수의학과, 임상병리학과, 간호학과, 치위생학과, 생물교육과",
		"생물공학연구원, 생물학연구원"
	],
	"미세먼지정화장치": [
		"지구환경에 관심이 많은 예비 환경공학자",
		"Human-Matter 존의 ‘미세먼지정화장치’관에 많은 시간을 할애하고, 공기정화 기술에 흥미를 보이셨네요.<br>미세먼지정화장치관에서는 주어진 공간 내의 공기로부터 오염 물질을 제거하기 위해 ‘에어 스크러버’를 활용하고 있습니다. 에어 스크러버를 작동시켜 원심력을 통해 액체와 기체를 동시에 이동시키고 강제로 접촉하도록 함으로써, 적은 에너지만으로도 효율적인 공기 정화를 가능하게 하고 있습니다.<br>이러한 기술을 구현하기 위해서는 기계공학, 환경공학, 화학 등 다양한 학문영역에서의 융합 기술이 필요하답니다. 앞으로도 미세먼지정화장치의 개발이나 이를 활용한 산업 분야에 관심을 가져보면 좋겠습니다.",
		"기계설계공학과, 대기과학과, 환경공학과, 환경보건학과",
		"대기환경기술자, 수질환경연구원, 기상연구원"
	],
	"Nirsit": [
		"인지과학에 관심이 있는 예비 뇌공학자",
		"Human-Heart 존의 뇌(Brain) 영상 기술 체험 콘텐츠인 ‘널싯(NIRSIT)’관에 많은 시간을 할애하고, 뇌영상 기술을 체험하는데 흥미를 보이셨네요.<br>뇌 영상 기술은 뇌조직 혈류의 역학적 변화와 에너지 상태에 대한 지속적인 관찰을 바탕으로 질병을 조기에 진단하거나 뇌 질환 치료 효과를 판정·예측하는데 활용되는 첨단 기술입니다. 작고 심플해 보이는 외관과 달리 ‘널싯’은 반도체와 SW 알고리즘, 고속 통신 기술이 접목된 첨단 융합 기술을 토대로 만들어졌습니다.<br>앞으로도 소프트웨어·반도체·정보통신 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가져보면 좋겠네요.",
		"반도체학과, 소프트웨어공학과, 정보통신공학과, 컴퓨터공학과, 간호학과, 물리치료학과, 보건관리학과, 의료정보공학과, 의예과, 노인복지학과",
		"뇌공학자, 상담전문가, 의사"
	],
	"AI 피아노": [
		"인공지능에 관심이 많은 예비 예술가",
		"Human-Heart 존의 인공지능 융합 콘텐츠인 ‘AI 피아노’관에 많은 시간을 할애하고, 흥미를 보이셨네요.<br>AI 피아노는 인공지능을 통해 사람의 표정을 인식하고 감정을 파악해서 그 감정과 분위기에 맞게 곡을 변형하여 연주하는 피아노입니다. AI 피아노의 연주가 나의 마음을 읽은 것 같아서, 혹은 실제 피아니스트의 연주 같아 놀라진 않으셨나요? 인공지능은 이미 우리가 불가능하다고 생각했던 영역에까지 적용되어 새로운 세상을 열어가고 있습니다. AI 피아노는 이러한 인공지능 기술에 음악, 디지털콘텐츠 등 다양한 학문들이 복합적으로 융합되어 만들어진 기술이지요.<br>앞으로 펼쳐질 세상에서는 기계공학·컴퓨터공학 같은 공학 분야 뿐 아니라, 음악학·심리학 등 전통적인 학문으로 여겨져 온 분야들에서도 인공지능의 적용이 계속 확대되어 갈 것입니다. 여러분의 관심분야에서 인공지능이 어떻게 발달해 갈지, 또한 인공지능을 어떻게 적용할 수 있을지 관심을 가져보면 좋겠네요.",
		"기계설계공학과, 컴퓨터공학과, IT융합학과, 예술치료학과, 의예과, 디지털콘텐츠학과, 멀티미디어학과, 디지털디자인학과, 미디어영상학과, 실용음악학과, 음악학과, 작곡과, 피아노학과, 심리학과",
		"상담전문가, 연주가, 음반기획자, 음악치료사, 작곡가"
	],
	"트랜스월": [
		"뉴미디어에 관심이 많은 예비 가상현실전문가",
		"Human-Heart 존의 게임 미디어 체험 콘텐츠인 ‘트랜스월(TransWall)’관에 많은 시간을 할애하고, 흥미를 보이셨네요.<br>‘트랜스월’은 투명한 유리의 양면을 터치해 게임을 즐길 수 있는 신개념 게임 미디어로, 평범한 주변의 유리벽을 오락 & 커뮤니케이션 매체로 바꿀 수 있는 흥미로운 기술입니다. 평범한 지하철 역사, 공공장소에서 지루하게 기다려야 할 때, 이러한 기술을 바탕으로 게임을 즐길 수 있다면 너무 신나겠지요?　‘트랜스월’은 간단한 유리벽처럼 보이지만, 소프트웨어공학, 정보통신, 컴퓨터공학 등 첨단 융합 기술의 복합체입니다.<br>앞으로 소프트웨어·컴퓨터공학·정보통신 등의 첨단 기술 분야, 또한 콘텐츠 산업 분야에 관심을 가져보면 좋겠습니다.",
		"디지털콘텐츠학과, 멀티미디어학과, 소프트웨어공학과, 인터넷정보학과, 정보통신공학과, 컴퓨터공학과, 예술치료학과, 미디어영상학과, 시각디자인학과, 예술학과",
		"가상현실전문가, 광고기획자, 국제회의 전문가",
	],
	"디헤이징기술": [
		"안전한 환경에 관심이 많은 예비 디헤이징 연구자",
		"Human-Industry 존의 ‘디헤이징(De-hazing)기술’ 체험 콘텐츠에 많은 시간을 할애하고, 흥미를 보이셨네요.<br>카메라를 통해 인식된 환경이나 물체를 보다 선명하게 볼 수 있게 하는 이미지 디헤이징 기술은 자율주행이나 CCTV를 활용한 도시 관리, 치안 등 우리 생활을 보다 편리하고 안전하게 하는　다양한 분야에서 활용되고 있는 중요한 기술입니다. 디헤이징 기술을 활용하면 시야를 확보하기 힘든 어려운 상황에서도 실시간으로 선명한 시야를 확보하고 상황에 대한 빠른 대응이 가능하지요.<br>디헤이징 기술은 컴퓨터공학·미디어영상학 등의 학문과 밀접하게 관련되어 있으며, 보다 안전한 환경을 만들고자 하는 다양한 직업 분야에서 활용되고 있습니다. 관련한 산업분야에 대해 좀 더 알아보는 것은 어떨까요?",
		"안전공학과, 컴퓨터공학과, 소방방재학과, 응급구조학과, 해양생명과학과, 미디어영상학과, 경찰행정학과, 군사학과, 해양경찰학과, 해양스포츠학과",
		"경찰관, 군인, 비행기조종사, 선장/항해사, 소방관"
	],
	"스마트팜": [
		"미래농업 시스템에 관심이 많은 예비 스마트팜 구축가",
		"Human-Industry 존의 ’스마트팜’관에 많은 시간을 할애하고, 흥미를 보이셨네요.<br>스마트 팜이란 스마트(smart)와 농장(farm)의 합성어로 농사 기술에 사물인터넷(IoT)과 빅데이터를 활용하여 시공간 제약 없이 최적의 생육 환경을 자동제어하는 ‘지능화된 농장’을 말합니다. 노동력과 에너지를 적게 투입하고도 농업 활동을 최적화할 수 있어, 전 세계적으로 개발, 육성하기 위해 노력하고 있는 분야이지요. 이러한 스마트팜은 기계설계공학이나 메카트로닉스공학과 같은 공학분야는 물론, 지구환경과학, 원예학과 등 다양한 학문분야의 지식이 융합되어 만들어진 기술입니다.<br>앞으로 기계설계공학이나 메카트로닉스공학과 같은 첨단 기술 분야 학문에, 혹은 스마트팜과 관계된 직업에 관심을 가져보는 것은 어떨까요?",
		"기계설계공학과, 메카트로닉스공학과, 조경학과, 농공학과, 산림자원학과, 식량자원학과, 원예학과, 지구환경과학과, 한약자원학과, 도시계획학과, 외식산업학과",
		"스마트 팜 구축가, 영농사업가"
	],
	"인터렉티브시티": [
		"빅데이터에 관심이 많은 예비 도시설계전문가",
		"Human-Industry 존의 ‘인터렉티브시티(Interactive City)’관에 많은 시간을 할애하고, 흥미를 보이셨네요.<br>도시에는 수많은 데이터가 존재하고, 이러한 데이터를 수집하고 활용하는 기술은 나날이 발전하고 있습니다. 도시환경을 계획하고 설계해 나가는 과정에서 데이터를 활용해 계획한 결과물을 실시간으로 시뮬레이션할 수 있다면 큰 도움이 되겠지요? 여러분이 체험하신 ‘인터렉티브시티’는 이러한 시뮬레이션 기술에 건축학·교통공학·조경학·토목공학 등 다양한 학문을 적용하여 만들어진 것입니다.<br>데이터를 기반으로 도시환경을 연구하고 설계하는 분야에 대해 좀 더 알아보면 어떨까요?",
		"건축학과, 교통공학과, 도시공학과, 조경학과, 토목공학과, 지적학과, 통계학과, 행정학과, 도시계획학과, 물류학과, 사회학과, 유통학과",
		"건축사, 경제학연구원, 도시설계전문가, 교통설계전문가, 사회학 연구원"
	],
	"바인로봇": [
		"최첨단 융합기술에 관심이 많은 예비 로봇연구원",
		"Human-Industry 존에서 ‘바인로봇(Vine Robot)’관에 많은 시간을 할애하고, 흥미를 보이셨네요.<br>바인로봇은 인간을 비롯, 동식물의 기본 구조와 매커니즘을 모방한 생체모방 로봇의 일종으로, 몸체가 팽창하면서 확장하며 먼 거리 이동이 가능하고, 지형의 모양에 따라 유연하게 적응할 수 있습니다. 길이 연장이나 방향 제어가 자유로운 특성은 인간이 접근할 수 없는 좁고 험난한 환경에서 효과적으로 활용될 수 있지요. 단순해 보이는 외관과 달리 ‘바인로봇’은 기계공학과 컴퓨터공학, 로봇공학 등 최첨단 융합 기술을 토대로 만들어졌습니다.<br>앞으로 기계공학·로봇공학·정보통신공학 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가져보면 좋겠네요.",
		"기계공학과, 기계설계공학과, 로봇공학과, 메카트로닉스공학과, 소방방재학과, 안전공학과, 정보통신공학과, 컴퓨터공학과, 수의학과, 동물자원학과, 지질학과, 간호학과, 방사선학과, 임상병리학과, 의예과, 고고학과, 문화재보존학과",
		"로봇연구원, 소방관, 의사"
	],
	"두더지봇": [
		"첨단 기술에 조예가 깊은 예비 지질학연구원",
		"Human-Industry 존에서 ‘두더지봇’관에 많은 시간을 할애하고, 흥미를 보이셨네요.<br>두더지봇은 두더지의 생물학적 구조와 굴착 습성을 모방해 만든 굴착 로봇으로, 지하 내에서 방향을 자유롭게 바꾸어 굴착을 진행함으로써 지하자원 탐사를 원활하게 할 수 있도록 하는 로봇입니다. 두더지봇에는 위치 인식을 위해 첨단 센서 시스템과 알고리즘이 탑재되어 있고, 이외에도 기계공학과 컴퓨터공학, 토목공학 등 다양한 첨단 융합 기술이 적용되었습니다.<br>앞으로 로봇공학 분야나 기계설계, 컴퓨터공학 및 토목공학 등 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가져보면 좋겠네요.",
		"기계공학과, 기계설계공학과, 로봇공학과, 컴퓨터공학과, 토목공학과, 에너지자원공학과, 동물자원학과, 수의학과, 지질학과",
		"금속공학기술자, 지질학연구원, 토목공학기술자, 토양환경기술자"
	],
	"E-튜브": [
		"정보통신 분야에 관심이 많은 예비 네트워크과학자",
		"Human-Industry 존의 ‘이튜브(E-튜브)’관에 많은 시간을 할애하고, 흥미를 보이셨네요.<br>이튜브는 고주파 대역에서 큰 채널 손실을 갖는 금속 전선의 근본적 한계를 극복하고자 개발된 플라스틱 도파관 케이블로, 광케이블과 비교해 3배 이상의 비용 효율을 보이는 신기술입니다. 신소재, 데이터통신이 접목된 첨단 융합 기술 분야이지요.<br>나날이 전도유망해 지고 있는 신소재·정보통신·컴퓨터공학 등의 첨단 기술 분야에 관심을 가져보면 좋겠네요.",
		"디지털콘텐츠학과, 멀티미디어학과, 신소재공학과, 인터넷정보학과, 정보통신공학과, 화학공학과, 컴퓨터공학과",
		"네트워크과학자, 네트워크엔지니어"
	],
	"모터": [
		"로봇에 관심이 많은 예비 로봇연구원",
		"너드랩 존의 ‘모터’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 BLDC모터, 로봇과 관련됩니다.<br>모터 영역은 BLDC 모터의 원리에 관한 설명을 듣고, 모터가 동작하는 모습을 볼 수 있으며, 이와 관련된 간단한 체험을 할 수 있는 활동입니다. 모터는 퍼텐셜 에너지를 회전력으로 변환해서 이용하는 기계이며, BLDC모터란, 내부의 마모되기 쉬운 부분(Brush)을 제거해 내구성을 높이고, 고속 회전에 무리가 없는 모터의 방식입니다. 로봇은 스스로 보유한 능력에 의해 주어진 일을 자동으로 처리하거나 작동하는 기계로, 컴퓨터에 의한 정보 처리와 실제의 기계적 움직임을 결부시켜 로봇 제작을 연구하는 학문이 로봇공학(robotics)입니다.<br>앞으로도 BLDC모터, 로봇 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"로봇공학과, 메카트로닉스공학과, 무인항공학과, 자동차공학과",
		"기계공학기술자, 로봇연구원, 메카트로닉스공학기술자"
	],
	"감속기": [
		"기계에 관심이 많은 예비 기계공학기술자",
		"너드랩 존의 ‘감속기’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 기어, 베어링과 관련됩니다.<br>감속기란, 모터의 회전수를 줄여 속도를 줄이는 물건입니다. 기어란, 두 개 또는 그 이상의 축 사이에 회전이나 동력을 전달하는 장치이며, 베어링이란 회전 및 직선 운동을 하는 축을 지지하는 역할을 하는 것을 의미합니다.<br>앞으로도 기어, 베어링 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"기계공학과, 기계설계공학과, 로봇공학과, 메카트로닉스공학과, 자동차공학과, 전기제어공학과, 제어계측공학과, 조선공학과",
		"금속공학기술자, 기계공학기술자, 산업공학기술자, 자동차공학기술자"
	],
	"동력전달장치": [
		"로봇과 기계에 관심이 많은 예비 메카트로닉스공학기술자",
		"너드랩 존의 ‘동력전달장치’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 구동기, 링크구조와 관련됩니다.<br>동력전달장치는 기관에서 발생한 동력을 운전하고자 하는 기계의 축에 전달하는 장치입니다. 구동기는 하나의 다른 장치를 제어하거나 조절하는 하드웨어 장치 또는 프로그램을 의미합니다. 예를 들면, 장치 구동기는 컴퓨터 운영 체계(OS)로 하여금 키보드나 모니터, 마우스 등의 특정 주변 장치와 통신하여 그것을 제어할 수 있게 하는 제어 프로그램입니다. 링크란, 기계에 전달된 동력을 여러 모양의 얼개에 의해서 운동부분으로 전달하여, 필요한 일을 하는데 이 동력을 운반하는 요소를 의미하며, 링크구조는 로봇 설계와 관련됩니다.<br>앞으로도 구동기, 링크구조 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"기계공학과, 로봇공학과, 메카트로닉스공학과, 안전공학과, 물리치료학과, 작업치료학과, 건강관리학과, 재활학과, 스포츠건강관리학과, 노인복지학과",
		"기계공학기술자, 로봇연구원, 메카트로닉스공학기술자, 생물학연구원"
	],
	"센서부착다리": [
		"로봇과 기계에 관심이 많은 예비 로봇연구원",
		"너드랩 존의 ‘센서부착다리’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 구동기, 링크구조와 관련됩니다.<br>센서부착다리는 센서를 부착한 로봇 다리를 이용한 체험입니다. 구동기는 하나의 다른 장치를 제어하거나 조절하는 하드웨어 장치 또는 프로그램을 의미합니다. 예를 들면, 장치 구동기는 컴퓨터 운영 체계(OS)로 하여금 키보드나 모니터, 마우스 등의 특정 주변 장치와 통신하여 그것을 제어할 수 있게 하는 제어 프로그램입니다. 링크란, 기계에 전달된 동력을 여러 모양의 얼개에 의해서 운동부분으로 전달하여, 필요한 일을 하는데 이 동력을 운반하는 요소를 의미하며, 링크구조는 로봇 설계와 관련됩니다.<br>앞으로도 동력전달장치, 센서부착다리 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"기계공학과, 로봇공학과, 메카트로닉스공학과, 안전공학과, 물리치료학과, 작업치료학과, 건강관리학과, 재활학과, 스포츠건강관리학과, 노인복지학과",
		"기계공학기술자, 로봇연구원, 메카트로닉스공학기술자, 생물학연구원"
	],
	"보행시뮬레이션": [
		"물리엔진, 그래픽에 관심이 많은 예비 가상현실전문가",
		"너드랩 존의 ‘보행시뮬레이션’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 물리엔진, 그래픽과 관련됩니다.<br>시뮬레이션이란, 어떠한 현상이나 사건을 컴퓨터로 모형화하여 가상으로 수행시켜 봄으로써 실제 상황에서의 결과를 예측하는 것으로, 실제 상황에서 할 수 없는 가상적인 시험이 가능합니다. 보행시뮬레이션의 예를 생각해 본다면, 달에서 효율적으로 표면을 탐사하기 위한 것과 관련됩니다. 물리엔진은 단순한 특정 물리 시스템을 최대한 시뮬레이션하려고 하는 컴퓨터 소프트웨어이며, 물리엔진은 컴퓨터 그래픽스, 비디오 게임, 영화 분야와 관련됩니다. 그래픽은 그림, 도형 또는 영상을 사용하여 정보를 표현하는 방법으로, 상품화, 정보 제공, 일러스트레이트, 엔터테인먼트와 관련된 시각 표현입니다.<br>앞으로도 물리엔진, 그래픽 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"재료공학과, 응용소프트웨어공학과, 컴퓨터공학과, 물리학과, 간호학과, 물리치료학과, 의예과, 작업치료학과, 재활학과, 건강관리학과",
		"가상현실전문가, 로봇연구원, 물리학연구원, 비행기조종사, 애니메이터, 컴퓨터그래픽디자이너"
	],
	"센서글로브": [
		"동작인식, 센서, 무선통신에 관심이 많은 예비 가상현실전문가",
		"너드랩 존의 ‘센서글로브’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 동작인식, 센서, 무선통신과 관련됩니다.<br>센서글로브란, 관람객이 센서장갑을 끼고 모니터 화면의 애니메이션 캐릭터를 조종하는 체험을 의미합니다. 동작인식이란, 사용자의 움직임, 얼굴, 음성 등 신체 조절 정보를 카메라 센서, 적외선센서, 마이크 등으로 감지해 3차원 가상공간에 구현하는 기술이며, 센서란, 열, 빛, 온도, 압력, 소리 등의 물리적인 양이나 그 변화를 감지하여 알려주는 기구를 의미합니다. 무선통신이란, 전파를 이용해 선에 의한 연결 없이 원격지에 정보를 전달하는 통신기술입니다.<br>앞으로도 동작인식, 센서, 무선통신 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"게임공학과, 국방기술학과, 기계공학과, 로봇공학과, 메카트로닉스공학과, 컴퓨터공학과, 간호학과, 의예과, 의용공학과",
		"가상현실전문가, 게임기획자, 기계공학기술자, 로봇연구원, 섬유공학기술자"
	],
	"로봇피부": [
		"인공피부, 의료용 이미징에 관심이 많은 예비 의사",
		"너드랩 존의 ‘로봇피부’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 충격감지, 인공피부, 하이드로겔, 의료용 이미징과 관련됩니다.<br>로봇피부란, 사람의 피부와 같은 기능을 가지도록 만든 인공 피부를 의미하며, 압력 등의 외부자극을 감지할 수 있습니다. 로봇피부 영역에서는 관람객이 직접 피부를 눌러보는 등의 자극을 가한 후, 화면을 통해 로봇 피부가 외부자극을 감지하는 모습을 관찰할 수 있습니다. 충격감지란, 충격이 있을 때 깜빡이, 경보음 등을 작동하여 알려주는 기능으로, 충격감지 기술을 활용하여 외부 침입을 미연에 방지할 수 있습니다. 하이드로겔은 물이 기본 성분으로 들어 있는 젤리 모양의 물질로, 렌즈, 미세근육, 스킨케어패치류 등과 관련됩니다. 이미징이란, 시각적으로 인식할 수 있는 형태로 정보를 표현하는 것으로, 의료용 이미징은 의료 초음파, 자기공명영상(MRI) 등과 관련됩니다.<br>앞으로도 물리환경정보입력, 충격감지, 인공피부, 하이드로겔, 의료용 이미징 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"고분자공학과, 공업화학과, 기계공학과, 로봇공학과, 메카트로닉스공학과, 반도체학과, 생물산업기계공학과, 수의학과, 간호학과 물리치료학과, 의예과, 의용공학과",
		"로봇연구원, 생물학연구원, 전자공학기술자, 반도체공학자, 의사"
	],
	"햅틱다이얼": [
		"인간로봇 물리 상호작용, 감각전달에 관심이 많은 예비 메카트로닉스공학기술자",
		"너드랩 존의 ‘햅틱다이얼’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 인간로봇 물리상호작용, 감각전달과 관련됩니다.<br>햅틱은 촉감을 이용해 어떤 기기를 제어하는 기술로, 컴퓨터의 기능 가운데 촉각과 힘, 운동감 등을 느끼게 하는 기술입니다. 예를 들면, 전자기기를 만지거나 다룰 때 실제로 특정한 물체를 만지는 듯한 느낌을 주는 것입니다. 햅틱다이얼은 다이얼을 통해 관람객이 다이얼을 통해 햅틱 진동을 느껴볼 수 있는 체험입니다. 이러한 햅틱다이얼은 인간과 로봇의 물리상호작용 및 감각전달과 관련됩니다.<br>앞으로도 인간로봇 물리상호작용, 감각전달 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"고분자공학과, 공업화학과, 기계공학과, 로봇공학과, 메카트로닉스공학과, 반도체학과, 생물산업기계공학과, 수의학과, 간호학과 물리치료학과, 의예과, 의용공학과",
		"기계공학기술자, 로봇연구원, 메카트로닉스공학기술자, 물리치료사, 비행기조종사, 수의사, 의사, 자동차공학기술자"
	],
	"회전핸들": [
		"기계공학과 기계설계에 관심이 많은 예비 메카트로닉스공학기술자",
		"너드랩 존의 ‘회전핸들’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 로봇구동, 제어, 엔코더와 관련됩니다.<br>회전핸들은 관람객이 핸들을 돌리는 각도/움직임을 감지하여 모니터에 수치데이터등으로 송출하는 체험입니다. 로봇 구동 및 제어는 로봇이 목적에 맞는 작용을 할 수 있도록 로봇을 움직이는 것과 관련됩니다. 엔코더는 모터의 회전속도와 방향 등을 감지하는 융합 센서로, 엔코더 성능이 좋지 않으면 에러가 발생하여 로봇이 제대로 움직일 수 없습니다. 이는 신경이 온전하지 못한 사람이 똑바로 걷기 힘든 것과 유사합니다.<br>앞으로도 로봇구동, 제어, 엔코더 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"기계공학과, 기계설계공학과, 로봇공학과, 메카트로닉스공학과, 자동차공학과, 전기제어공학과, 제어계측공학과, 조선공학과",
		"기계공학기술자, 로봇연구원, 메카트로닉스공학기술자, 비행기조종사, 자동차공학기술자, 항공우주공학기술자"
	],
	"엘보엑소": [
		"인공근육, 웨어러블디바이스에 관심이 많은 예비 로봇연구원",
		"너드랩 존의 ‘엘보엑소’ 영역에 많은 시간을 할애하고 흥미를 보였으며, 이 영역은 주로 인공근육, 웨어러블디바이스와 관련됩니다.<br>엘보엑소란, 직접 입어보고 무거운 것을 들어보는 등 체험을 통해 웨어러블 로봇과 활용되는 분야를 이해하는 체험활동입니다. 인공근육은 사람의 근육을 대신하는 물질이며, 인공근육은 장애인을 위한 팔다리, 원자력 발전소나 우주개발 등 인간이 직접 작업하기 어려운 위험한 장소에서의 로봇의 근육에 활용될 수 있습니다. 웨어러블디바이스는 몸에 부착하거나 착용하여 사용하는 전자장치로, 안경, 팔찌, 시계, 신발 등의 다양한 형태로 구현됩니다.<br>앞으로도 인공근육, 웨어러블디바이스 등의 첨단 기술 분야, 또한 이를 활용한 산업 분야에 관심을 가지면 좋겠습니다.",
		"기계공학과, 로봇공학과, 메카트로닉스공학과, 안전공학과, 물리치료학과, 작업치료학과, 건강관리학과, 재활학과, 스포츠건강관리학과, 노인복지학과",
		"로봇연구원, 메카트로닉스공학기술자, 생물학연구원, 의사"
	],
};

async function fill_recommendation() {
	let words = await get_recommendation();
	document.getElementById("praisec").innerHTML = "당신은 '<b>" + words[0] + "</b>' 이시군요!";
	document.getElementById("fieldc").innerHTML = words[1];
	document.getElementById("majorc").innerHTML = words[2];
	document.getElementById("jobc").innerHTML = words[3];
}

async function get_recommendation() {

	let classification = "로봇피부";
	
	let result = recommendations[classification];
	
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
	[3],
	[2],
	[1],
	[3],
	[3],
	[4],
	[3],
	[9],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
	[3],
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
			tmpcont += "<div style='float:left; height:20px; background-color:#C0B4A5; width:" + tmpwidth + "px; margin-right:10px'></div>";
			tmpcont += "<div class='path_time'>" + tlength[tbcont1[step][0]-1][0] + "분</div>";
			tmpcont += "</div>";
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
			tmpcont += "<div style='float:left; height:20px; background-color:#C0B4A5; width:" + tmpwidth + "px; margin-right:10px'></div>";
			tmpcont += "<div class='path_time'>" + tlength[tbcont2[step][0]-1][0] + "분</div>";
			tmpcont += "</div>";
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
				tmpcont += "<div style='float:left; height:20px; background-color:#C0B4A5; width:" + tmpwidth + "px; margin-right:10px'></div>";
				tmpcont += "<div class='path_time'>" + tlength[tbcont2[step][2]-1][0] + "분</div>";
				tmpcont += "</div>";
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