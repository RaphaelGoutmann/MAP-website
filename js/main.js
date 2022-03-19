const navBtn = document.querySelector('#navbtn')
const header = document.querySelector('#header')

navBtn.addEventListener('click', () =>
{
    header.classList.toggle('active')
})

const loadscreen = document.querySelector('.loadscreen')

window.addEventListener("DOMContentLoaded", () =>
{
    loadscreen.classList.add('loaded')
});