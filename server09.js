var express = require('express')
var sha = require('./SHA256_ex/sha256_a&p.js'); //- hash.pug 사용하기 위해 added!
var app = express()
app.set('view engine', 'pug');
app.set('views', './html');  //html폴더에
// ./ : 지금 위치!
app.locals.pretty=true; //이쁘게 할거얌 -> <> <> <> </> </> </> 형태로 예쁘게 배열

app.use(express.static('data'));

app.get('/',function(req,res){
  res.send('<h1>여기는 진주리<br> 홈페이지입니다.<h1>')
});
//<br> 줄바꿈 =\n

app.get('/topic',function(req,res){
  res.send("여기는 topic페이지입니다.")
});

app.get('/pug',function(req,res){   //라우터 pug
  res.render('news',{tl:'Good Day, Mate!'}) //{키: 값}.(tl)             //news실행
});

app.get('/dynamic',function(req,res){
  // var sp='';  //안에 아무것도 없는 문자열 (빈문자열)
  // for(var i = 0; i<10; i++){
  //   sp+='${1}나만 안되냐고 이거';   //`` : Grave -> HTML이 된다. javascript를 넣을 수 있다. //빈문자열로 문자열화
  // }
  res.send(`<script>
    document.open()
    name=prompt('이름을 작성하세요.');
    document.write('당신의 이름은 '+name+'입니다.');
    </script>`); //<script> <script> -> 이 사이에는 java script로 쓰겠다!
});


app.get('/inf',function(req,res){
  res.render('inf')

});


app.get('/info',function(req,res){
  res.send('Your security is guaranteed! <br>'
  //  + 'No worries, Mate. I got you covered! <br> Would you like to reset your password? <br>' + req.query.id
    + 'It always happens, <br>' + req.query.id
    + 'Would you like to reset your current password: ' + req.query.pw
  //  + req.query.pw +'의 비밀번호를 수정하시겠습니까?<br>'
    + req.query.pw +'-->' + "<input type='text' name='pw' placeholder='password'>"

    + '<a href="/infpop">변경</a>'  //html-a 하이퍼링크
  )
  var ids = req.query.id;
  var pws = req.query.pw;
    res.render('inf2', {id:ids, pw:pws})
});

app.get('/infpop',function(req,res){
  res.send(`<script>
    alert('변경되었습니다')
    </script>`)

  res.send('변경된 비밀번호는 '+ req.query.pw + '입니다.')
});

//- KIM
app.get('/hash', function(req, res) {
    var id = req.query.iin
  if(id) {
    var input = req.query.iin;
    var result = sha.s(input);
    var result2 = sha.s(result);
    res.render('hash', {in_val:input, hashout:result, hashout2:result2})
  } else {
    res.render('hash', {in_val:'Empty', hashout:'Hash1', hashout2:'Hash2'})
  }
});

// // YW CHO
// app.get('/hash',function(req,res){
// //  var hs= req.query.hs;
//
//   res.render('hash');
// });
// app.get('/hash1',function(req,res){
// //  var hs= req.query.hs;
//   var sha=require('./SHA256_ex/sha256_a&p.js');
//   res.render('hash1',{K:req.query.key, H:sha.s(req.query.key), H2:sha.s(sha.s(req.query.key))})
// });



// app.get('/result',function(req,res){
//   res.send('변경된 비밀번호는 '+ req.query.pw + '입니다.')
// })
// app.get("/info",function(req,res){
//   var id=req.query.id;
//   var pw=req.query.pw;
//   res.send(`<h1>비밀번호 변경창</h1><br>
//     ${id} 님 안녕하세요.<br>
//     ${pw} 비밀번호를 수정하시겠어요?<br>
//     ${pw} => <input type="passeord" name="pw" placeholder="password");>
//     <input type="submit" value="변경" onclick='alert("변경되었습니다.");'>
//     `
// });





app.listen(3003,function(){
  console.log('server running 3003 port');
});
