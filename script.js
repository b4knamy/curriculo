


function scrollingSmooth(container) {
    const elem = document.querySelector(container)
    elem.scrollIntoView({behavior: 'smooth'})
}


const anchor_tag1 = document.querySelector('.about')
const anchor_tag2 = document.querySelector('.education')
const anchor_tag3 = document.querySelector('.project')
const anchor_tag4 = document.querySelector('.contact')


anchor_tag1.addEventListener('click', () => {
    scrollingSmooth('#about')
    }
)
anchor_tag2.addEventListener('click', () => {
    scrollingSmooth('#education')
    }
)
anchor_tag3.addEventListener('click', () => {
    scrollingSmooth('.projects-containers')
    }
)
anchor_tag4.addEventListener('click', () => {
    scrollingSmooth('#contact')
    }
)