

const topBtn = document.querySelector(".topBtn")

window.addEventListener("scroll",()=>{
    if (window.scrollY> 200){
        topBtn.style="display:block"
    }else {
        topBtn.style="display:none"
    }
})

topBtn.addEventListener("click",()=>{
    window.scrollTo({top:"0", behavior: "smooth"})

})


const leftBtn=document.querySelector(".left-btn")
const rightBtn=document.querySelector(".right-btn")
const sliders = document.querySelector(".sliders")

rightBtn.addEventListener("click",()=>{
    sliders.scrollLeft+=260
})

leftBtn.addEventListener("click",()=>{
    sliders.scrollLeft-=260
})



