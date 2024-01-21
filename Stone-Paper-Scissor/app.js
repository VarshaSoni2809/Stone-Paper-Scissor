let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".image");

let userScorePara=document.getElementById("user-score");
let compScorePara=document.getElementById("comp-score");

let message=document.getElementById("msg");

let resetBtn=document.querySelector("#reset");


const genCompChoice = () => {
    const options=["stone","paper","scissor"];
    const randIndx=Math.floor((Math.random())*3);
    return options[randIndx];

};

const drawGame=()=>{
    console.log("Match draw");
    message.innerHTML="Match draw, play again."
    message.style.backgroundColor="black";
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win!");
        userScore++;
        userScorePara.innerText=userScore;
        message.innerHTML=`Hurrah!! you win. Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
        
    }
    else{
        console.log("you lose!");
        compScore++;
        compScorePara.innerText=compScore;
        message.innerHTML=`ohh! you lose, ${compChoice} beats ${userChoice}` ;
        message.style.backgroundColor="red";
       
    }

   

}

const playGame=(userChoice) =>{
    console.log("user choice : ",userChoice);

    const compChoice=genCompChoice();
    console.log("computer choice : ",compChoice);
    
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        userWin=true;
        if(userChoice==="stone"){
            //comp choice can be:paper,scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //comp choice can be:stone,scissor
            user=compChoice==="scissor"?false:true;
        }
        else{
            //user=scissor..comp=stone,paper
            userWin=compChoice==="stone"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);

    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    })
   
});

resetBtn.addEventListener("click",()=>{
    userScorePara.innerText=0;
    compScorePara.innerText=0;
    message.innerText="Play your move!";
    message.style.backgroundColor="black";

})