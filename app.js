//-------------------VARIABLES

const aboutBtn = document.getElementById('aboutBtn')
const techBtn = document.getElementById('techBtn')
const projectsBtn = document.getElementById('projectsBtn')
const contactBtn = document.getElementById('contactBtn')
const aboutPage = document.getElementById('aboutPage')
const techPage = document.getElementById('techPage')
const projectsPage = document.getElementById('projectsPage')
const contactPage = document.getElementById('contactPage')
let activePage = aboutPage
let activeBtn = aboutBtn

//-------------------FUNCTIONS

function about() {
    activePage.classList.remove('activePage')
    activePage.style.opacity = '0'
    setTimeout(() => {
        activePage.classList.add('hidden')
        activePage = aboutPage    
        aboutPage.classList.remove('hidden')
        setTimeout(() => {
            activePage.style.opacity = '1'
            activeBtn.addEventListener('click', activeListener)
            aboutPage.classList.add('activePage')}, 100)
    }, 300)
}

function technologies() {
    activePage.classList.remove('activePage')
    activePage.style.opacity = '0'
    setTimeout(() => {
        activePage.classList.add('hidden')
        activePage = techPage
        activePage.classList.remove('hidden')
        setTimeout(() => {
            activePage.style.opacity = '1'
            activeBtn.addEventListener('click', activeListener)
            techPage.classList.add('activePage')}, 100)
    }, 300)
}

function projects() {
    activePage.classList.remove('activePage')
    activePage.style.opacity = '0'
    setTimeout(() => {
        activePage.classList.add('hidden')
        activePage = projectsPage
        activePage.classList.remove('hidden')
        setTimeout(() => {
            activePage.style.opacity = '1'
            activeBtn.addEventListener('click', activeListener)
            techPage.classList.add('activePage')}, 100)
    }, 300)  
}

function contact() {
    activePage.classList.remove('activePage')
    activePage.style.opacity = '0'
    setTimeout(() => {
        activePage.classList.add('hidden')
        activePage = contactPage
        activePage.classList.remove('hidden')
        setTimeout(() => {
            activePage.style.opacity = '1'
            activeBtn.addEventListener('click', activeListener)
            techPage.classList.add('activePage')}, 100)
    }, 300)    
}


//-------------------EVENT LISTENERS

let activeListener = about
// aboutPage.addEventListener('click', () => activePage.style.opacity = '0');
// techPage.addEventListener('click', () => techPage.style.opacity = '1');
// projectsPage.addEventListener('click', () => projectsPage.style.opacity = '1');
// contactPage.addEventListener('click', () => contactPage.style.opacity = '1');
techBtn.addEventListener('click', technologies)
projectsBtn.addEventListener('click', projects)
contactBtn.addEventListener('click', contact)