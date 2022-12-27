// 제어문

// if문
function check_answer(val){
    if(val == '네'){
        document.write('자바스크립트는 재미있다.');
        alert('앞으로도 열심히 공부하세요.');
    }
    if(val == '아니오'){
        document.write('자바스크립트는 재미없다.');
        alert('좀 더하면 재미있지 않을까요.');
    }
    if(val == '글쎄'){
        document.write('잘 모르겠는 자바스크립트...');
        alert('그래도, 계속 해보면 어떨까요?');
    }
}
// else if문
function check_answer(val){
    if(val == '네'){
        document.write('자바스크립트는 재미있다.');
        alert('앞으로도 열심히 공부하세요.');
    }else if(val == '아니오'){
        document.write('자바스크립트는 재미없다.');
        alert('좀 더하면 재미있지 않을까요.');
    }else if(val == '글쎄'){
        document.write('잘 모르겠는 자바스크립트...');
        alert('그래도, 계속 해보면 어떨까요?');
    }
}

// switch case문
function check_answer2(){
    switch(val){
        case '네':
            document.write('자바스크립트는 재미있다.');
            alert('앞으로도 열심히 공부하세요.');
            break;
        case '아니오':
            document.write('자바스크립트는 재미없다.');
            alert('좀 더하면 재미있지 않을까요.');
            break;
        case '글쎄요':
            document.write('잘 모르겠는 자바스크립트...');
            alert('그래도, 계속 해보면 어떨까요?');
            break;
    }
}

// while문, do while문
let cnt = 0;
let sum = 0;
while(cnt < 10){
    cnt += 1;
    sum += cnt;
}
document.write(sum + '<br>');

cnt = 0;
sum = 0;
do{
    cnt += 1;
    sum += cnt;
}while(cnt < 10);
document.write(sum + '<br>');

// for문
sum = 0;
for(cnt = 1; cnt <= 10; cnt++){
    sum += cnt; // sum += cnt
}
document.write(sum + '<br>');

// break문 : 반목문 안에서 사용되면 반복을 종료하는 명령이다.
cnt = 0;
sum = 0;
while(cnt < 100){
    cnt = cnt + 1;
    if(cnt > 10){
        break;
    }
    sum = sum + cnt;
}
document.write(sum + '<br>');

// continue문
cnt = 0;
sum = 0;
while(cnt < 10){
    cnt++;
    if(cnt % 2 == 0){
        continue;
    }
    sum = sum + cnt;
}
document.write(sum + '<br>');

// Math.floor(Math.random() * 3 + 1)