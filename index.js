const content_about = document.querySelector('.about')
const content_project = document.querySelector('.project')
const content_contact = document.querySelector('.contact')
const nav_about = document.querySelector('.nav-about')
const nav_project = document.querySelector('.nav-project')
const nav_contact = document.querySelector('.nav-contact')




nav_project.addEventListener('click', () => {
    var current_nav = document.querySelector('.current-container')
    if (current_nav !== content_project) {
        makeChange(current_nav, content_project)
    }
    
})
nav_contact.addEventListener('click', () => {
    var current_nav = document.querySelector('.current-container')
    if (current_nav !== content_contact) {
        makeChange(current_nav, content_contact)
    }
    
})
nav_about.addEventListener('click', () => {
    var current_nav = document.querySelector('.current-container')
    if (current_nav !== content_about) {
        makeChange(current_nav, content_about)
    }
    
})



function makeChange(before, after) {
    before.classList.add('off-show-anim')
    before.classList.remove('showing')
    setTimeout( () => {
        before.classList.remove('off-show-anim')
        before.classList.remove('current-container')
        before.classList.add('off-show')
        after.classList.remove('off-show')
        after.classList.add('current-container')
        after.classList.add('showing')
        
    }, 1000)
}