var listnum = document.querySelectorAll("#cont .num")
for (var i = 0; i < listnum.length; i++){
    listnum[i].addEventListener("click",function(){
        this.classList.add("selected");
    });
}