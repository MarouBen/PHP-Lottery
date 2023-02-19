// index page
var selectedCount = 0;
var listnum = document.querySelectorAll("#cont .num");
var btn = document.querySelector("button[type=submit]")

for (var i = 0; i < listnum.length; i++){
    listnum[i].addEventListener("click",function(){
        if (selectedCount < 7 || this.classList.contains("selected")){
            this.classList.toggle("selected");
            var value = this.textContent;
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

// draw page
function animateNumber(result) {
    const div = document.querySelector(".result-animation:not(.animated)");
    div.classList.add("animated");
    let i = 1;
    const intervalId = setInterval(() => {
      if (i >= result) {
        clearInterval(intervalId);
        div.textContent = result;
        div.onclick = null;
        checkAllClicked()
        return;
      }
      div.textContent = i;
      i += 1;
    }, 20);
  }

function checkAllClicked() {
    const numDivs = document.querySelectorAll('.result-animation');
    const final = document.querySelector("#final");
    const allClicked = Array.from(numDivs).every((div) => div.classList.contains('animated'));
    if (allClicked) {
        final.style.opacity = 1;
    }
}

