let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");


let turn0=true;

const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]

];

const  resetGame =() =>{
   turn0=true;
   enableBoxes();
   msgcontainer.classList.add("hide");


};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
       console.log("The Box was clicked");
       if(turn0){
          box.innerText="O";
          turn0=false;
       }else{
        box.innerText="X";
         turn0=true;
       }
       box.disabled=true;

       checkWinner();
    });
});

const disableBoxes= () =>{
   for(let box of boxes){
      box.disabled=true;
   }
};

const enableBoxes= () =>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
};

const showWinner=(Winner) => {
    msg.innerText= `Congratulations ,winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
   for(let pattern of winPatterns ){
      let pos1Val= boxes[pattern[0]].innerText;
      let pos2Val= boxes[pattern[1]].innerText;
      let pos3Val= boxes[pattern[2]].innerText;

      if(pos1Val !="" && pos2Val !="" && pos3Val !="" ) {
         if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner",pos1Val);
          showWinner(pos1Val);
         }
      }
   }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
