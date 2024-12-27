function seeds(){
    window.location.href="seed.html"
}
function Pesticides(){
    window.location.href="pesticides.html"
}
function Fertilizers(){
    window.location.href="fertilizers.html"
}
 function search(){
     let query = document.getElementById("searchinput").value.trim().toLowerCase();
     if(query === "seed"){
         window.location.href="seed.html";
     }
     else if(query === "pesticides"){
         window.location.href="pesticides.html";
     }
     else if(query === "fertilizers"){
         window.location.href="fertilizers.html";
     }
     else{
         alert("No results found...");
     }
 }