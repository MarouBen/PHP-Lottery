var selectedCount = 0;
var listnum = document.querySelectorAll("#cont .num");
for (var i = 0; i < listnum.length; i++){
    listnum[i].addEventListener("click",function(){
        if (selectedCount < 7 || this.classList.contains("selected")){
            this.classList.toggle("selected");
            selectedCount +=  this.classList.contains("selected")? 1 : -1;
        }
    });
}