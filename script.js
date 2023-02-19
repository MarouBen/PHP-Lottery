var selectedCount = 0;
var listnum = document.querySelectorAll("#cont .num");
var btn = document.querySelector("button[type=submit]")

for (var i = 0; i < listnum.length; i++){
    listnum[i].addEventListener("click",function(){
        if (selectedCount < 7 || this.classList.contains("selected")){
            this.classList.toggle("selected");
            var value = this.dataset.value;
            var input = this.nextElementSibling;
            input.value = this.classList.contains("selected")? value : "";
            selectedCount +=  this.classList.contains("selected")? 1 : -1;
            if (selectedCount == 7) {
                btn.disabled = false;
            } 
            else {
                btn.disabled = true;
            }
        }
    });
}