
const body=document.body;
const myBoxPosition=document.querySelector(".myBox");
const borderBox=document.querySelector(".borderBox");
const warningTxt=document.querySelector("#warningTxt");
let position =myBoxPosition.style.top;
let positionLeft=myBoxPosition.style.left;

let newPosition=0;

document.addEventListener("keydown",function(event){
  console.log(event.key);
      event.preventDefault();
      if(event.key==="ArrowLeft")
      {
        let newPosition1=Number(positionLeft)-10;
        if(newPosition1 >=0 )
        { 
          positionLeft=String(newPosition1);
         myBoxPosition.style.left = `${positionLeft}px`;
         borderBox.style.backgroundColor="white";
         warningTxt.innerHTML=`you pressed ${event.key}`;
        }
        else
        {
        borderBox.style.backgroundColor="red";
        warningTxt.innerHTML=` press other Arrows`;
        }
        }

        if(event.key==="ArrowUp")
      {
        let newPosition=Number(position)-10;
        if(newPosition >=0 )
        { 
         position=String(newPosition);
         myBoxPosition.style.top = `${position}px`;
         borderBox.style.backgroundColor="white";
         warningTxt.innerHTML=`you pressed ${event.key}`;
        }
        else
        {
          borderBox.style.backgroundColor="red";
          warningTxt.innerHTML=` press other Arrows`;
          }
      }

       if(event.key==="ArrowRight")
      {   
        let newPosition1=Number(positionLeft)+10;
        if(newPosition1 < 451 )
        { 
          positionLeft=String(newPosition1);
         myBoxPosition.style.left = `${positionLeft}px`;
         borderBox.style.backgroundColor="white";
         warningTxt.innerHTML=`you pressed ${event.key}`;
        }
        else
        {
          borderBox.style.backgroundColor="red";
          warningTxt.innerHTML=` press other Arrows`;
          }
        }
     
      if(event.key==="ArrowDown")
      {
        let newPosition=Number(position)+10;
         if(newPosition <=450 )
         { 
          position=String(newPosition);
          myBoxPosition.style.top = `${position}px`;
          borderBox.style.backgroundColor="white";
          warningTxt.innerHTML=`you pressed ${event.key}`;
         }
         else
         {
          borderBox.style.backgroundColor="red";
          warningTxt.innerHTML=` press other Arrows`;
          }
      }      
});
