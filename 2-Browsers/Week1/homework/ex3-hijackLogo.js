'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  
   const allImages = document.getElementsByTagName("img");

   function checkImageAndReplace(allImages){
      for (let i = 0; i < allImages.length; i++){
         if (allImages[i].getAttribute("alt") === "Google") {
            allImages[i].src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
            allImages[i].srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
         }
      }
   }

   checkImageAndReplace(allImages);
}

hijackGoogleLogo();
