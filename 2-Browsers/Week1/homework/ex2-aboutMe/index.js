'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
//change the body tag's style
document.body.style.fontFamily = "Arial, sans-serif";


const infoSpans = document.getElementsByTagName("span");
const infoList = document.getElementsByTagName("li");

//replace each of the spans
function addPersonalInfo(infoSpans) {
   infoSpans[0].textContent = "Medo";
   infoSpans[1].textContent = "fish";
   infoSpans[2].textContent = "Winterswijk";
}

//add class to all the li
function addClassToList(infoList) {
   for (let i = 0; i < infoList.length; i++){
      infoList[i].classList.add("list-item")
   }
}

addPersonalInfo(infoSpans);
addClassToList(infoList);
