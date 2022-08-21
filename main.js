import './src/style.css'
import './src/normalize.css'
import './src/header.css'
import './src/info.css'
import './src/directions.css'
import './src/lessons.css'
import './src/videolesson.css'
import './src/reviews.css'
import './src/footer.css'
import './src/tablet.css'
import './src/mobile.css'
import './src/menu.css'


import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';

new Splide('.splide', {
    pagination: true
}).mount();


const lessons = document.querySelector('.lessons')
const buttons = Array.from(document.querySelectorAll('.lessons__btn'))
const slides = Array.from(document.querySelectorAll('.lessons__slide'))

function setActiveLessonSlide(code) {
    lessons.querySelector(`.lessons__btn[data-lesson-trigger="${code}"]`).dataset.active = ''
    lessons.querySelector(`.lessons__slide[data-lesson-list="${code}"]`).dataset.active = ''
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.dataset.active) {
            buttons.forEach(it => delete it.dataset.active)
            slides.forEach(it => delete it.dataset.active)
            setActiveLessonSlide(button.dataset.lessonTrigger)
        }
    })
})

setActiveLessonSlide('online')

const app = document.querySelector('#app')
const menu = document.querySelector('.menu')
const headerBtn = document.querySelector('.header__menu-btn')
headerBtn.addEventListener('click', () => {
    app.classList.add('menu-active')
})

menu.addEventListener('click', e => {
    if (e.target === menu) {
        app.classList.remove('menu-active')
    }
})