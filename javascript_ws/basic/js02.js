// 연산자

let result;
result = 10 + 3;
document.write("10 + 3 = " + result + "<br>");

result = 10 - 3;
document.write("10 - 3 = " + result + "<br>");

result = 10 * 3;
document.write("10 × 3 = " + result + "<br>");

result = 10 / 3;
document.write("10 ÷ 3 = " + result + "<br>");

result = 10 + 2 * 3;
document.write("10 + 2 * 3 = " + result + "<br>");

//result : 16
let num = result++;
let num2 = ++result;

//num : 16
document.write(num + "<br>");   //  16
document.write(result + "<br>");    //  17

/*
    += : num += 10 -> num = num + 10;
    -= : num -= 10 -> num = num - 10;
    *= : num *= 10 -> num = num * 10;
    /= : num /= 10 -> num = num / 10;
    %= : num %= 10 -> num = num % 10;

    비교연산자
    >, <, >=, <=, ==, !=
    === : 값과 타입이 전부 일치해야 true.
    ex) 1(정수) === '1'(문자열) -> false
    == : 값만 일치하면 true:
    ex) 1(정수) == '1'(문자열) -> true

    논리 연산자

        1) A : true, B : true 일때,
            A && B : true;
            A || B : true;
        2) A : true, B : false 일때,
            A && B : false;
            A || B : true;
        3) A : false, B : false 일때,
            A && B : false;
            A || B : false;

    A : true 일 때, !A : false
    A : false 일 때, !A : true
*/
result = true && true;
document.write('true && true = ' + result + '<br>');

result = true && false;
document.write('true && false = ' + result + '<br>');

result = false && true;
document.write('false && true = ' + result + '<br>');

result = false && false;
document.write('false && false = ' + result + '<br>');
document.write('-----------------------------<br>');

result = true || true;
document.write('true || true = ' + result + '<br>');

/*

    비트 연산자
    1. 논리합(&) AND : 자리마다 둘다 1이면 1
        A : 11 (1011), B : 9(1001) 일 때,
        A & B = 9
        1011
        1001
        ----
        1001 (9)

    2. 논리곱(|) OR : 자리마다 하나만 1이면 1
        A : 11 (1011), B : 9(1001) 일 때,
        A | B = 9
        1011
        1001
        ----
        1011 (11)

    3. 배타적 논리합(^) XOR : 서로 다르면 1
        A : 11 (1011), B : 9(1001) 일 때,
        A ^ B = 9
        1011
        1001
        ----
        0010 (2)
*/
document.write('-----------------------------<br>');
let A = 11;
let B = 9;
result = A & B;
document.write('A & B = ' + result + '<br>');

result = A | B;
document.write('A | B = ' + result + '<br>');

result = A ^ B;
document.write('A ^ B = ' + result + '<br>');

/*
    Shift 연산자
    정해진 비트만큼 왼쪽(<<) 또는 오른쪽(>>)으로 값을 이동
    A : 11(1101)
    A << 1 : 22(0001 0110)
    A << 2 : 44(0010 1100)

    A : 11(1101)
    A >> 1 : 5(0000 0101)
    A >> 2 : 2(0000 0010)
    */
result = A << 1;
document.write('A << 1 = ' + result + '<br>');  // 22

result = A << 2;
document.write('A << 2 = ' + result + '<br>');  // 44
result = A >> 1;
document.write('A >> 1 = ' + result + '<br>');  // 44
result = A >> 2;
document.write('A >> 2 = ' + result + '<br>');  // 44
