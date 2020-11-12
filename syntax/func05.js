var ok = {
k1:'v1',
k2:'v2'

f1: function (){
  console.log(this.k1);   // this를 사용하면 o의 이름이 변해도 괜찮음! console.log(o.key01)
},

f2: function (){
  console.log(this.k2);
}
}

ok.f1();
ok.f2();

//
//
// func03.js
//
// // var o = {key01:'val01', key2:'val02'}
//
// var o = {
// key01:'val01',
// key02:'val02'
//
// f1: function (){
//   console.log(this.key01);   // this를 사용하면 o의 이름이 변해도 괜찮음! console.log(o.key01)
// }
//
// f2: function (){
//   console.log(this.key02);
// }
// }
//
// o.f1();
// o.f2();
//
// // ctls + Alt + down arrow: AVATAR
// // ctls + R + up arrow
//
// // console.log(o.key01)
// // console.log(o.key02)
//
// // function f1() {
// //   console.log(o.key01);
// // }
// // function f1() {
// //   console.log(o.key02);
// // }
// //
// // f1();
// // f2();
