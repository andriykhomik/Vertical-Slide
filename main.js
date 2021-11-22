const sliderContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slide');
const sliderLeft = document.querySelector('.left-slide');
const slidersLength = sliderRight.querySelectorAll('div').length;
const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');

let activeSlideIndex = 0;

downButton.addEventListener('click', ()=> changeSlide('down'));
upButton.addEventListener('click', ()=> changeSlide('up'));


sliderLeft.style.top = `-${(slidersLength - 1) * 100}vh`

const changeSlide = (direction)=>{
    const sliderHeight = sliderContainer.clientHeight;

    if (direction === 'up'){
        activeSlideIndex ++;
        if (activeSlideIndex > slidersLength - 1){
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex --;
        if (activeSlideIndex < 0){
            activeSlideIndex = slidersLength - 1;
        }
    }

    sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px`
    sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px`
}
