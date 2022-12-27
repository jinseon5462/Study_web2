// 함수

// 호이스팅 : 함수이면 문서 상단으로 끌어올린다.
hello();
function hello(){
    document.write('안녕하세요!<br>');
}
hello();
let name = '이진선';
helloWithName(name);
function helloWithName(name){
    document.write(name + "님 안녕하세요~~<br>");
}

//eval() : 내장함수
function make(val){
    eval("alert('" + val + "님 반갑습니다.')");
}

function calculate(str){    // "(10 + 1)" eval은 문자열을 자바스크립트 코드로 인식한다.
    alert(eval(str));
}
document.write("------------------------------------------<br>");
document.write("parseInt<br>");

// parseInt() : 내장함수
document.write("3.65 -> " + parseInt("3.56") + "<br>");
document.write("14:10 -> " + parseInt("14", 10) + "<br>");  // 14
// parseInt("14", 10) : 문자열 14를 정수로 변환하는데 10진수로 변환한다.
document.write("1110:2 -> " + parseInt("1110", 2) + "<br>"); // 14
document.write("16:8 -> " + parseInt("16", 8) + "<br>"); // 14
document.write("E:16 -> " + parseInt("E", 16) + "<br>"); // 14
// 0 ~ 9, A(10), B(11), C(12), D(13), E(14), F(15) 16진수

document.write("ABCD -> " + parseInt("ABCD") + "<br>");
// NaN : Not a Number 숫자가 아니라 변환할수 없다.
document.write("ABCD -> " + parseInt("1ABCD") + "<br>");
// 바꿀수 있는 숫자가 있으면 변환
document.write("ABCD -> " + parseInt("ABCD1") + "<br>");

// parseFloat() : 내장함수
document.write("------------------------------------------<br>");
document.write("parseFloat<br>");
document.write("3.56 -> " + parseFloat("3.56") + "<br>" );
document.write("3.56 -> " + parseInt("3.56ABCD") + "<br>" );
document.write("3.56 -> " + parseFloat("3.56ABCD") + "<br>" );

// isNan() : 내장함수 - 주어진 값이 숫자인지 아닌지 검사하는 함수
// true : 숫자가 아니다. false : 숫자가 맞다.
document.write("------------------------------------------<br>");
document.write("isNaN<br>");
document.write("12A -> " + isNaN("12A") + "<br>");  // true
document.write("parseInt('12') -> " + isNaN(parseInt("12A")) + "<br>");    // false
document.write("12 -> " + isNaN("12") + "<br>");    //false

function checkConvert(){
    let value = "1 + 3";
    let change1 = isNaN(eval(value));
    document.write('change1의 값이 NaN입니까?' + change1 + '<br>');
}
checkConvert();
