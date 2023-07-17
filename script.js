const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const slider = document.querySelector('#slider')
const slides = document.querySelectorAll('.slideItem')
const slidesCount = slides.length;
let currentSlide = 0;

function slideLeft(){
    if(currentSlide == 0){
        currentSlide = slidesCount -1;
    }else{
        currentSlide--
    }
    slides.forEach(el =>{
        el.classList.remove('active')
    })
    slides[currentSlide].classList.add('active')
    console.log('test');
}


function slideRight(){
    if(currentSlide >= slidesCount -1){
        currentSlide = 0
    }else{
        currentSlide++
    }
    slides.forEach(el =>{
        el.classList.remove('active')
    })
    slides[currentSlide].classList.add('active')

}
btnLeft.addEventListener('click',slideLeft)
btnRight.addEventListener('click',slideRight)

setInterval(slideLeft,5000)
