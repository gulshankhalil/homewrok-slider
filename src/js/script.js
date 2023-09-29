window.addEventListener("DOMContentLoaded", function () {
         let prevBtn = document.getElementById("prevBtn");
         let nextBtn = document.getElementById("nextBtn");
         let sliderImg = document.getElementById("sliderImg");
         let sliderContainer=document.querySelector(".slider-container");


         let images = [
             ".src/css/img1.jfif", //0
             ".src/css/img2.jfif", //1
             ".src/css/img3.jfif", //2
            ".src/css/img4.jfif", //3
             "src/css/img5.jfif", //4
         ] 
         
         let currentIndex = 0;

        function SlideImage() {
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            } else if (currentIndex >= images.length) {
                currentIndex = 0;
             }
             sliderImg.src = images[currentIndex];
         }


         prevBtn.addEventListener("click", function () {
             currentIndex--;
             SlideImage();
         })

         nextBtn.addEventListener("click", function () {
             currentIndex++;
             SlideImage();
         })

      //   let autoSlide = setInterval(function () {
        //     currentIndex++;
          //   SlideImage();
        // }, 500);

      // sliderContainer.addEventListener("mouseover", function () {
        //     clearInterval(autoSlide);
       //  })
       //  sliderContainer.addEventListener("mouseout", function () {
         //    autoSlide = setInterval(function () {
           //      currentIndex++;
             //    SlideImage();
            // }, 500);
        // })
        })