let cartQuantity = 0;

function showquantity() {
        alert(`the cart quantity : ${cartQuantity}`);
}

let buttonreset = document.querySelector('.reset');
buttonreset.addEventListener('click', function reset(){
     buttonreset.style.backgroundColor = "blue";
     buttonreset.style.color = "white";  
     buttonreset.textContent = "reseted";
     },true);
     
     let buttoreset = document.querySelector('.resset');
buttoreset.addEventListener('click', function reset(){
     buttoreset.style.backgroundColor = "skyblue";
     buttoreset.style.color = "black";  
     buttoreset.textContent = "reseted";
     buttoreset.style.padding = "24px 10px";
     });
 
   const computerMove = pickComputerMove();

     function pickComputerMove() {
        const randomNumber = Math.random();
        
         let computerMove = "";
         
            if (randomNumber>=0 && randomNumber<1/3) {
                computerMove="rock";
            } else if(randomNumber>=1/3 && randomNumber<2/3) {
                computerMove="paper";
            } else if (randomNumber>=2/3 && randomNumber<1) {
                computerMove="scissors";
            }
       return computerMove;
     }
     
     const score = {
        wins: 0,
        losses: 0,
        ties: 0
     };
     
     function playGame(playerMove) {
         
 const computerMove = pickComputerMove();

             let result = "";
            
         if (playerMove === 'scissors') {
               
                if (computerMove === "rock") { result = "You lose.";
                } else if (computerMove === "paper") {
                        result = "You win.";
                } else if (computerMove === "scissors") {
                        result = "Tie.";
                }
       
         } else if (playerMove === 'paper') {
                
                if (computerMove === "paper") {
                        result = "Tie.";
                } else if (computerMove === "scissors") {
                        result = "You lose.";
                } else if (computerMove === "rock") {
                        result = "You win.";
                }
        
         } else if (playerMove === 'rock') {
               
                if (computerMove === "rock") {
                        result = "Tie.";
                } else if (computerMove === "paper") {
                        result = "You lose.";
                } else if (computerMove === "scissors") {
                        result = "You win.";
                }
         }
           if (result === "You win.") {
                score.wins += 1; 
           } else if (result === "You lose.") {
                score.losses += 1;   
           } else if (result === "Tie.") {
                score.ties += 1;   
           }
         
           alert(`you picked ${playerMove}. computer picked ${computerMove}. ${result} wins:${score.wins},losses:${score.losses},ties:${score.ties}`);
     }