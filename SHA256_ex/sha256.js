var sha = require('./sha256_a&p.js');   // folder내 오리지날 파일 호출~
var input = 'test';
console.log(sha.s(input));  // line 1의 sha에 해당하는 것을 가져오기 위해 sha.
console.log(sha.s(input).length);
