let score = 0;
let ans = 0;
let timer;
let time = 30;

function startTimer(){
  clearInterval(timer);
  time = 30;

  document.getElementById("timer").innerText = "Time: " + time;

  timer = setInterval(()=>{
    time--;
    document.getElementById("timer").innerText = "Time: " + time;

    if(time == 0){
      clearInterval(timer);
      nextQ();
    }
  },1000);
}

function nextQ(){
  let cat = document.getElementById("cat").value;
  let diff = document.getElementById("diff").value;

  let q="", opt=[];

  // MATH
  if(cat=="math"){
    let max = diff=="easy"?10:50;
    let a = Math.floor(Math.random()*max);
    let b = Math.floor(Math.random()*max);

    ans = a+b;
    q = a + " + " + b + " = ?";
    opt = [ans, ans+1, ans-1, ans+2];
  }

  // ENGLISH
  if(cat=="english"){
    q = "Synonym of Happy?";
    opt = ["Sad","Joyful","Angry","Tired"];
    ans = 1;
  }

  // REASONING
  if(cat=="reasoning"){
    q = "2, 4, 6, ?";
    opt = ["8","10","12","14"];
    ans = 0;
  }

  document.getElementById("q").innerText = q;

  for(let i=0;i<4;i++){
    let btn = document.getElementById("b"+i);
    btn.innerText = opt[i];
    btn.classList.remove("correct","wrong");
  }

  startTimer();
}

function check(i){
  clearInterval(timer);

  let btns = document.querySelectorAll("button");

  if(i==ans){
    score++;
    btns[i].classList.add("correct");
    document.getElementById("right").play();
  } else {
    btns[i].classList.add("wrong");
    btns[ans].classList.add("correct");
    document.getElementById("wrong").play();
  }

  document.getElementById("score").innerText="Score: "+score;

  setTimeout(nextQ,1000);
}

nextQ();