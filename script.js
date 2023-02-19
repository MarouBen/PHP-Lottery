var listnum = document.querySelectorAll("#cont .num");
alert("hello")
for (var i = 0; i < listnum.length; i++){
    listnum[i].addEventListener("click",function(){
        this.classList.toggle("selected");
    });
}