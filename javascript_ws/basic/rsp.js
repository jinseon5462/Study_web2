const win = document.querySelector('win');
const draw = document.querySelector('draw');
const loose = document.querySelector('loose');

function check(me){
    let com = Math.floor(Math.random() * 3 + 1);
    // 내가 묵일때 묵 : 1 찌 : 2 빠 : 3
    if(me == 1 && com == 3){
        document.getElementById("user").src = '/basic/images/r.png';
        document.getElementById("com").src = '/basic/images/p.png';
        document.getElementById("result").innerHTML = "내가 졌소...";
        loose.value = document.querySelector('#loose').value++;
    }else if(me == 1 && com == 2){
        document.getElementById("user").src = '/basic/images/r.png';
        document.getElementById("com").src = '/basic/images/s.png';
        document.getElementById("result").innerHTML = "내가 이김ㅋ";
        win.value = document.querySelector('#win').value++;
    }else if(me == 1 && com == 1){
        document.getElementById("user").src = '/basic/images/r.png';
        document.getElementById("com").src = '/basic/images/r.png';
        document.getElementById("result").innerHTML = "어라...? 비겼다;";
        draw.value = document.querySelector('#draw').value++;
    }else if(me == 2 && com == 3){  // 내가 찌일때
        document.getElementById("user").src = '/basic/images/s.png';
        document.getElementById("com").src = '/basic/images/p.png';
        document.getElementById("result").innerHTML = "내가 이김ㅋ";
        win.value = document.querySelector('#win').value++;
    }else if(me == 2 && com == 2){
        document.getElementById("user").src = '/basic/images/s.png';
        document.getElementById("com").src = '/basic/images/s.png';
        document.getElementById("result").innerHTML = "어라...? 비겼다;";
        draw.value = document.querySelector('#draw').value++;
    }else if(me == 2 && com == 1){
        document.getElementById("user").src = '/basic/images/s.png';
        document.getElementById("com").src = '/basic/images/r.png';
        document.getElementById("result").innerHTML = "내가 졌소...";
        loose.value = document.querySelector('#loose').value++;
    }else if(me == 3 && com == 3){
        document.getElementById("user").src ='/basic/images/p.png';
        document.getElementById("com").src = '/basic/images/p.png';
        document.getElementById("result").innerHTML = "어라...? 비겼다;";
        draw.value = document.querySelector('#draw').value++;
    }else if(me == 3 && com == 2){  // 내가 빠일때
        document.getElementById("user").src = '/basic/images/p.png';
        document.getElementById("com").src = '/basic/images/s.png';
        document.getElementById("result").innerHTML = "내가 졌소...";
        loose.value = document.querySelector('#loose').value++;
    }else if(me == 3 && com == 1){
        document.getElementById("user").src = '/basic/images/p.png';
        document.getElementById("com").src = '/basic/images/r.png';
        document.getElementById("result").innerHTML = "내가 이김ㅋ";
        win.value = document.querySelector('#win').value++;
    }

    
}