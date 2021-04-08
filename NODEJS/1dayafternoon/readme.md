일단 expresss 넘기고 소켓부터 함

클라이언트/ 서버 통신방식
1, polling 방식
 주기적으로 클라이언트가 서버에 요청 후 응단 수산
 실시간X

 2.long poll kqdtlr
 유효 이벤트 발생시 응답

3.web socket 방식
http 요청/응답과 상관 없이 양뱡향통신 가능

  ㄱ.Socket.io
   구형 익스플로러에선 html로 작동하고 업데이트가 되며 브라우저에서는 웹소켓 방식으로 동작