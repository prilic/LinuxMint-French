/*Navigation menu command*/

/*Botton*/
document.getElementById('navBtn').addEventListener('click',function myFunction() {
    this.classList.toggle("change");
   });
/*Element of the Menu*/
document.getElementById('navBtn').addEventListener('click',function scroolMenu(){
    var element = document.getElementById("menu");
    if(element.style.display === "block"){
        element.style.display = "none";
    }
    else{
        element.style.display="block"; 
    }
});

