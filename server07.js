var express = require('express')
var app = express()
app.set('view engine', 'pug');
app.set('views', './html');
app.locals.pretty = true;

app.use(express.static('data'))
app.get('/', function(req,res) {
  res.send('<h1>You are now at the MAINGATE of The Castle!<h1>')
});

app.get('/topic', function(req,res){
  res.send(' Here is the topic you are interested in!')
});

app.get('/pug', function(req,res){
  res.render('news', {tl:'Good Day, Mate!'})
});

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
  alert('안녕! 이라고 말하지마~~~ 라고 했니 안했니???')
  yesorno=confirm('Male for Yes, Female for No')
  document.open()
  if(yesorno==true)
  document.write("<font color=blue> MALE? </font>. LEFT Side Please!")
  else
  document.write("Welcome, <font color=pink> Ladies! </font> You are <font color=pink> Always RIGHT! </font>")
  </script>`);
});

app.get('/test', function(req, res){

    var arr=[
      'Coffee',
      'Tea',
      'Red Ginseng',
      'Pasta',
      'Steak',
      'Wine',
      'Dessert'
    ]

    var pick = `
      <a href="test?id=0">Coffee</a><br>
      <a href="test?id=1">Tea</a><br>
      <a href="test?id=2">Red Ginseng</a><br>
      <a href="test?id=3">Pasta</a><br>
      <a href="test?id=4">Steak</a><br>
      <a href="test?id=5">Wine</a><br>
      <a href="test?id=6">Dessert</a><br><br>
      ${arr[req.query.id]}
    `
    res.send(pick)
})

app.get('/inf', function(req, res){
  res.render('inf')
});

app.get('/Login', function(req, res) {
  var ID=req.query.ID;
  var PW=req.query.PW;

  res.send('Welcome, ' + ID)
  res.render('Login')
});

app.get('/PW', function(req, res) {
  res.render('PW')
});

app.listen(3003, function(){
  console.log('Server Running 3003 Port');
})
