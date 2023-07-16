const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const slider = document.querySelector('#slider')
const slides = document.querySelectorAll('.slideItem')
const slidesCount = slides.length;
const circles = document.querySelector('.circles')
let currentSlide = 0;

// function showCircle(){
//     circles.innerHTML = "";
//     for(i=0;i <= slidesCount;i++){
//         let circle = document.createElement('circle');
//         circle.classList.add('circle')
//         circle.dataset.slideId = i;
//         circles.appendChild(circle);
        
//     }
//     document.querySelectorAll('.circle')[currentSlide].classList.add('active')
// }

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
// showCircle()


// document.querySelectorAll('.circle').forEach(element => {
//     element.addEventListener('click',(e) => {
//         console.log(e.target.dataset.slideId);
//     })
// });

// document.querySelector('.circle').addEventListener('click', e => {
//     console.log(e.target);
// })