// ///////////////////////////////navbar//////////////////////////////
const menuIcon = document.querySelector(".menu-icon");
const rightDiv = document.querySelector(".right-div");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener ("click",()=> {
  
   if(menuIcon.classList.contains("clicked")) {
    rightDiv.style.display = "none";
    navLinks.style.display = "none";
    menuIcon.classList.remove("clicked")
   } else {
    rightDiv.style.display = "grid";
    navLinks.style.display = "block";
    menuIcon.classList.add("clicked");
   }

})


const category = document.querySelector(".category-link");
const dropDownMenu  = document.querySelector(".dropdown-items");

document.addEventListener("DOMContentLoaded",()=>{
    category.addEventListener("click",()=> {
        if(menuIcon.classList.contains("clicked")) {
            dropDownMenu.style.display = "none";
            menuIcon.classList.remove("clicked");
           } else {
            dropDownMenu.style.display = "flex";
            menuIcon.classList.add("clicked");
           }
        
    })

    
})

const anchor = Array.from(navLinks.querySelectorAll("ul li a"));
console.log(anchor)

function navLinkStyleByItsLocation(array) {
    array.forEach(element => {
       const name = element.getAttribute("name");
       const location = window.location.pathname;

       if (location.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
        element.classList.add("active");
        console.log(element);
       }
    });
}

navLinkStyleByItsLocation(anchor);


/////////////////////////////////////navbar///////////////////////