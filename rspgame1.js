let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const us=document.querySelector("#user-score");
const cs=document.querySelector("#comp-score");



//function to give random guess:-

const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


//function to select option from user side:-

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

//function if draw:-
const draw=()=>{
    console.log("match got draw!");
    msg.innerText="match got draw!";
};

//function to display winner:-
const showWin=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        us.innerText=userscore;
        msg.innerText=`You Won! your's ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
        console.log("you won");

    }

    else{
        compscore++;
        cs.innerText=compscore;
         msg.innerText=`You lost! your's ${userChoice} got beaten by ${compChoice} `;
         msg.style.backgroundColor="red";
         console.log("you lost ");
    }
};

//function to display user and comp options choosen:-
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=getCompChoice();
    console.log("comp choice=",compChoice);

    
    
//logic to decide who won:-

if(userChoice===compChoice){
    draw();
}
else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userwin=compChoice==="scissors"?false:true;
    }
    else{
        userwin=compChoice==="rock"?false:true;
    }
    showWin(userwin,userChoice,compChoice);
}


};


