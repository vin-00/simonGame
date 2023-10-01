let gameSeq= [];
let userSeq =[];

let score =0;
let btns = ["pink","orange","cyan","blue"];
let started = false;
let level =0;

let h2 = document.querySelector('h2');
let highScore = document.querySelector('p');
document.addEventListener("keypress",function(){
    if(started == false){
        
        started = true;   
        levelUp();
        console.log("start");
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    
}

function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{   
        if(level>score){
            let hs = 
            h2.innerHTML= `New High Score ! Your score was <b>${level}</b> &nbsp; Press any key to start the game`;
            highScore.innerHTML = `Highest Score : <b>${level}</b>`
            score = level;
        }
        else{
            h2.innerHTML= `Game Over ! Your score was <b>${level}</b> &nbsp; Press any key to start the game`;
        }
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute('id');
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    level =0;
    gameSeq = [];
    userSeq =[];
}