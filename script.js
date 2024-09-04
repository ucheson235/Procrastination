

document.getElementById("menu").addEventListener("click", function(){
  document.querySelector("#sidebar").style.width = "250px";
  document.querySelector("#menu").style.marginLeft  = "250px";

})



// / function for Close sidebar 

document.getElementById("closeBtn").addEventListener("click", function(){
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("menu").style.marginLeft = "0";
});






 