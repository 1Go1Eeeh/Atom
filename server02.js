// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//

// var http = require('http')       // App으로 넘어 가니깐 생략~!
// var server = http.createServer();  // App으로 넘어 가니깐 생략~!
var express = require('express')
var app = express()
// server.on('request', doRequest);   // App으로 넘어 가니깐 생략~!
// server.listen(3003);               // App으로 넘어 가니깐 생략~!
// console.log('starting Server!!!')  // App으로 넘어 가니깐 생략~!
// function doRequest(req,res) {
//   res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
//   res.write(' Your First time visiting my NodeJS Server? \n Vítejte na mém nodejs serveru!\n 어서오시와 yo~ 환영합니다 yo!')
//   res.end();
// }

app.use(express.static('data'))

 // '/' 내위치, 기본위치 (localhost:3003)
 // creating routers
app.get('/', function(req,res) {
  res.send('<h1>You are now at the Maingate of The Castle!<h1>')
});

app.get('/topic', function(req,res){
  res.send(' Here is the topic you are interested in!')
});

// html 줄바꿈: https://hianna.tistory.com/300
// 1) break in between words; 사과<br>바나나<br>포도<br>
//

// app.get('/login', function(req,res){
//   res.send(' Would you like to get into The Castle? <br> Please allow our knights to escort your way!')
// });
//
// app.get('/signup', function(req,res){
//   res.send('Please sign up for your prestige membership for The Castle')
// });

app.get('/dynamic', function(req, res) {
// js내에서 쓰는 구문으로 사용!
// var sp = ''; //빈문자열: 아무것도 담기지 않은 문자열을 표시, 숫자와 혼돈 막기 위해. 숫자는 x1
// // var num = x1;
//
// for(var i=0; i<12; i++){
//   // sp=sp+ `<h1> 월 <h1><br>` // `(located at with tilde) grave 안은 html 내용.
//   sp=sp+ `'${i} <h1> FBI WARNING' <h1><br>`
// }
// res.send(sp);

res.send(`<script>
  alert('안녕! 이라고 말하지마~~~')
  yesorno=confirm('Are you a male?')
  document.open()
  if(yesorno==true)
  document.write("Ysou are <font color=blue> a MALE </font>. Go to LEFT!")
  else
  document.write("You are <font color=pink> a Female </font>. You are Always RIGHT!")
  </script>`);
});

app.listen(3003, function(){
  console.log('Server Running 3003 Port');
})
