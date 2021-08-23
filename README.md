# AICuration_FE

https://juny0ung.github.io/AICuration_FE/page/

DB에 연결해야할 것

> page.js만 수정하면 된다.

1. get_personal_info() : 학생의 정보를 $personal\_info$와 같은 형식으로 업데이트하고 리턴한다.
1. get_heatmap() : heatmap의 이미지 파일을 받아온 후 그 파일의 이름을 리턴한다.
2. get_table() : 학생의 체류시간과 또래의 평균 체류 시간을 2차원 배열에 저장하고 리턴한다. $index + 1$이 부스의 번호가 되고 첫번째 열에 학생의 체류 시간이 두번째 열에 또래의 평균 체류 시간이 저장되면 된다.
3. get_recommendation() : 학생의 동선에 따른 추천 내용을 array에 저장하여 리턴한다. 첫번째 element에 주요 관심 분야, 두번째 element에 관련학과, 세번째 element에 관련 직업, 마지막 element에 추천 프로그램에 관련된 내용이 저장되면 된다.
4. maxTime : 학생들 체류시간의 최댓값이다. 현재는 30분으로 설정되어 있다.