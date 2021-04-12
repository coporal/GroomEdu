7.npm소개및설치부터 다시시작

npm [명령어] [타겟 모듈 이름] [옵션]
npm install [모듈명]
npm -v     //버전확인
npm 최신버전 업그레이드
npm install -g npm


2.npm 확장모듈 설치
 방법 01. global로 설치
          설치경로는 /node_modules 디렉터리
 방법 02. local로 설치
          설치경로는 현재 개발 중인 애플리케이션의 node_modules 디렉터리

01.글로벌로 설치
npm install [모듈명] -g


02.로컬 설치
ㄱ.npm install [모듈 1], [모듈 2], [모듈 3]
ㄴ.npm install [모듈명@버전]


설치된 모듈 목록 확인
npm list       //-g 붙이면 글로벌 확인

확장 모듈 업데이트
npm update [모듈명]  //-g 붙이면 글로벌 업데이트
npm update           //전체 업데이트

확장 모듈 삭제
npm uninstall [모듈명] //-g 붙이면 글로벌 삭제


8.express 프레임워크
express는 경량화 웹 개발 프레임 워크로, 노드를 이용한 웹 서비스나 웹 애플리케이션 개발에 가장 널리 쓰이는 확장 모듈 중 하나입니다
홈페이지: https://expressjs.com/

9.express Pug 템플리 엔진
 ejs는 html 태그에 부분적으로 입력 및 수정을 하는 방식
 pug는 코드를 간소화시켜서 컴파일한 후에 html을 렌더링하는 방식

 pug의 원래 이름은 jade였지만 저작권 문제로 현재 pug로 변경되었습니다. 
 jade로 쓰인 기간이 더 길기 때문에 jade로 더 널리 알려져 있지요. p
 ug 관련 자료를 찾아볼때 jade라고 검색해도 무방합니다.

 이 강의에서는 pug를 사용하도록 하겠습니다.  pug는 node.js용으로 만들어진 view 템플릿 엔진으로, pug 문법에 맞게 작성하면 해당 내용을 html이나 자바스크립트로 바꾸어줍니다. 문법이 간단해서 HTML보다 훨씬 사용하기 편리합니다. 

 #들여쓰기 안하면 에러#

 pug 이용시 HTML에서 사용하지 못하였던 for문도 사용이 가능하다
 기본적으로 생선된 코드에서는 렌더링할 파일의 기본확장자를 pug가 아닌, jade로 정의하고 있다->app.js 수정해야함