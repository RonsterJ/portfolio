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
    activePage.classList.add('hidden')
    activeBtn.addEventListener('click', activeListener)
    aboutPage.classList.remove('hidden')
    aboutPage.classList.add('activePage')
    activePage = aboutPage    
}

function technologies() {
    activePage.classList.remove('activePage')
    activePage.classList.add('hidden')
    activeBtn.addEventListener('click', activeListener)
    techPage.classList.remove('hidden')
    techPage.classList.add('activePage')
    activePage = techPage
}

function projects() {
    activePage.classList.remove('activePage')
    activePage.classList.add('hidden')
    activeBtn.addEventListener('click', activeListener)
    projectsPage.classList.remove('hidden')
    projectsPage.classList.add('activePage')
    activePage = projectsPage    
}

function contact() {
    activePage.classList.remove('activePage')
    activePage.classList.add('hidden')
    activeBtn.addEventListener('click', activeListener)
    contactPage.classList.remove('hidden')
    contactPage.classList.add('activePage')
    activePage = contactPage    
}


//-------------------EVENT LISTENERS

let activeListener = about
techBtn.addEventListener('click', technologies)
projectsBtn.addEventListener('click', projects)
contactBtn.addEventListener('click', contact)

console.log(activeBtn)
    const pages = [aboutPage, techPage, projectsPage, contactPage]
    const buttons = [aboutBtn, techBtn, projectsBtn, contactBtn]