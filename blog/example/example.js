const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;


//이전 버튼 클릭시 
prevButton.addEventListener("click", () => {
    if (slideIndex > 0){
        slideIndex--;
        updateSlider();
    }

});

nextButton.addEventListener("click", () => {
    if(slideIndex < 2){
        slideIndex++;
        updateSlider();
    }

})


function updateSlider() {
    const translateX = -slideIndex * 400;
    slider.style.transform = `translateX(${translateX}px)`;
}

