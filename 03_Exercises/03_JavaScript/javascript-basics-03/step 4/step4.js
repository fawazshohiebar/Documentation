function checkme(){

   var x= document.getElementById("password").value;
   var y =document.getElementById("confirmation").value;
   if(x==y){
    alert("thank you sir ")
   }else{
    document.querySelector("#password").style.border = "thick solid red";
    document.querySelector("#confirmation").style.border = "thick solid red";

   }
}