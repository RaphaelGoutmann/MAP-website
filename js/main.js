const navBtn = document.querySelector('#navbtn')
const header = document.querySelector('#header')

navBtn.addEventListener('click', () =>
{
    header.classList.toggle('active')
})

document.querySelector('main').addEventListener('scroll', () =>
{
    header.classList.remove('active')
})

const loadscreen = document.querySelector('.loadscreen')

window.addEventListener("load", () =>
{
    loadscreen.classList.add('loaded')
});