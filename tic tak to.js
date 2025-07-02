
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newGame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
const winpatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
   
     ];
        const resetGame = ()=>{
        turno = true;
        enableBoxes();
        msgcontainer.classList.add("hide");
        };

         boxes.forEach((box)=>{
          box.addEventListener("click", () => {
            // console.log("box was clicked");
            if(turnO){
                box.innerText = "O";
                turnO = false ;
            }else{
                box.innerText = "X"; 
                turnO = true;
            }
            box.Disabled = true;
            checkWinner();
         });
        });
        const DisableBoxes= () =>{
            for(let box of boxes){
                box.disabled = true ;
            }
        };
        const enableBoxes= () =>{
            for(let box of boxes){
                box.disabled = false ;
                box.innerText ="";
            }
        };
        const showwinner = (Winner)=>{
            msg.innerText = `congratulations, the winner is ${Winner}`;
            msgcontainer.classList.remove("hide");
            DisableBoxes();
        };

     const checkWinner = () =>{
        for (let pattern of winpatterns){
            
            post1v = boxes[pattern[0]].innerText;
            post2v = boxes[pattern[1]].innerText;
            post3v = boxes[pattern[2]].innerText;

            if(post1v !=""&& post2v !="" && post3v !="" ) {
                if(post1v === post2v && post2v===post3v){
                    console.log("Winner",post1v);
                    showwinner(post1v);
                }
            }
        }
     };
     newgamebtn .addEventListener("click", resetGame);
     resetbtn.addEventListener("click", resetGame);
   

    
 