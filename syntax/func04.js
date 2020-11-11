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
