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


const results = document.querySelectorAll(".result");
let currentResultIndex = 0;

function animateResult() {
  const currentResult = results[currentResultIndex];
  let currentNum = 1;
  const finalNum = parseInt(currentResult.dataset.value);
  const intervalId = setInterval(() => {
    currentResult.innerText = currentNum;
    currentNum++;
    if (currentNum > finalNum) {
      clearInterval(intervalId);
      currentResult.classList.remove("result-animation");
      currentResultIndex++;
      if (currentResultIndex < results.length) {
        animateResult();
      }
    }
  }, 500); // Change this value to adjust the animation speed
}

animateResult();







// function animateNumbers() {
//   const divs = document.querySelectorAll('.result-animation');
//   for(let i = 0; i < divs.length; i++){
    
//     setTimeout(()=>animateNumber(divs[i]),i * 500 );
//   }
//   setTimeout(checkAllAnimated, 600 * divs.length);
// }

// function animateNumber(current) {
//   const div = current;
//   const result = parseInt(div.getAttribute("data-value"));
//   div.classList.add("animated");
//   let i = 1;
//   const intervalId = setInterval(() => {
//     if (i >= result) {
//       checkAllAnimated;
//       clearInterval(intervalId);
//     }
//     div.textContent = i;
//     i += 1;
//   }, 90);
  
// }

// function checkAllAnimated() {
//   const numDivs = document.querySelectorAll('.result-animation');
//   const final = document.querySelector("#final");
//   const allClicked = Array.from(numDivs).every((div) => div.classList.contains('animated'));
//   if (allClicked) {
//       final.style.opacity = 1;
//   }
// }

// window.addEventListener('load', animateNumbers);