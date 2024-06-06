const tabLinks = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabcontent");

tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', openTab);
});

function openTab(evt) {
    const btnTarget = evt.currentTarget;
    const day = btnTarget.getAttribute('data-day');

    tabContents.forEach(function(tabContent) {
        tabContent.classList.remove('tabcontent-active');
    });
    tabLinks.forEach(function(tabLink) {
        tabLink.classList.remove('tablinks-active');
    });

    document.querySelector(`#${day}`).classList.add('tabcontent-active');

    btnTarget.classList.add('tablinks-active');
}

const slider = document.querySelector(".slider");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
let current = 0;
let width = 486;

document.documentElement.style.setProperty("--width-of-slide", width+"px");

btnPrev.setAttribute("disabled","true");

let num = slider.querySelectorAll(".slide").length  /*определение количествва слайдов*/
btnNext.addEventListener("click",()=>{
    if(current< num-1){
    current++;
    btnPrev.removeAttribute("disabled")
    }
    else{
        btnNext.setAttribute("disabled", "true")
    }
    slider.style.transform = `translateX(-${current*width}px)`
})

btnPrev.addEventListener("click",()=>{
    if(current > 0 )
    {
    current--;
    btnNext.removeAttribute("disabled")
    }
    else{
        btnPrev.setAttribute("disabled", "true")
    }
    slider.style.transform = `translateX(-${current*width}px)`
})