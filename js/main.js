
const body=document.body;
const myBoxPosition=document.querySelector(".myBox");
body.addEventListener("keydown",function(event){
  console.log(event.key);
      event.preventDefault();
      if(event.key==="ArrowLeft")
      {

        
        let leftEl=Number(myBoxPosition.style.left);
         if(leftEl-10 >=0 )
         {
          document.querySelector(".myBox").style.left = document.querySelector(".myBox").style.left - 10;
          body.style.backgroundColor="white";
          console.log(Number(myBoxPosition.style.left));
          
         }
         else{
          body.style.backgroundColor="red";
         }
         
      } 
        if(event.key==="ArrowUp")
      {
        
        let topEl=Number(myBoxPosition.style.top);
         if(topEl-10 >=0 )
         {
          document.querySelector(".myBox").style.top ="100px";
           body.style.backgroundColor="white";
          console.log(Number(myBoxPosition.style.top));
         }
         else{
          body.style.backgroundColor="red";
         }
      }

       if(event.key==="ArrowRight")
      {
        
        let leftEl12=Number(myBoxPosition.style.left)+10;
         if(leftEl12 <=450 )
         {
          document.querySelector(".myBox").style.left = (document.querySelector(".myBox").style.left + 10);
          body.style.backgroundColor="white";
    
          console.log(Number(myBoxPosition.style.left));
         }
         else{
          body.style.backgroundColor="red";
         }
      }
      if(event.key==="ArrowDown")
      {
    
        let rightEl=Number(myBoxPosition.style.top)+10;
         if(rightEl <=4500 )
         {
          document.querySelector(".myBox").style.top = rightEl+"px";
          body.style.backgroundColor="white";
          console.log(myBoxPosition.style.top);
         }
         else{
          body.style.backgroundColor="red";
         }
      }

      // else
      // {
      //   body.style.backgroundColor="red";
      // }




      
});
// function move(e)
// {
// 	if(window.event) // IE
// 	{
// 		ek = window.event.keyCode;

// 		if (ek==37)
// 			document.getElementById('DIV1').style.left = (document.getElementById('DIV1').style.left - 5);
// 		if (ek==39)
// 			document.getElementById('DIV1').style.left = (document.getElementById('DIV1').style.left + 5);
// 		if (ek==38)
// 			document.getElementById('DIV1').style.top = (document.getElementById('DIV1').style.left - 5);
// 		if (ek==40)
// 			document.getElementById('DIV1').style.top = (document.getElementById('DIV1').style.top + 5);
// 	}
// 	else // Other browsers
// 	{
// 		ek = e.which

// 		if (ek==37)
// 			document.getElementById('DIV1').style.left = (document.getElementById('DIV1').style.left - 5);
// 		if (ek==39)
// 			document.getElementById('DIV1').style.left = (document.getElementById('DIV1').style.left + 5);
// 		if (ek==38)
// 			document.getElementById('DIV1').style.top = (document.getElementById('DIV1').style.left - 5);
// 		if (ek==40)
// 			document.getElementById('DIV1').style.top = (document.getElementById('DIV1').style.top + 5);
		
// 	}
