

const productContainer = document.querySelector(".product");


function setToLocalStorage() {
    data = JSON.stringify(screenNumber);
    localStorage.setItem("data",data);
}

function retrieveFromLocalStorage() {
    const dataRetrieved = localStorage.getItem("data");
    const data= JSON.parse(dataRetrieved)
    screenNumber = data;
    screen.innerText = data;
    console.log(data)
}



// const category = document.querySelector(".category-link")
// const dropDownMenu  = document.querySelector(".dropdown-menu ul") 

// document.addEventListener("DOMContentLoaded",()=>{
//     category.addEventListener("click",()=> {
//         if(menuIcon.classList.contains("clicked")) {
//             dropDownMenu.style.display = "none";
//             menuIcon.classList.remove("clicked");
//            } else {
//             dropDownMenu.style.display = "flex";
//             menuIcon.classList.add("clicked");
//            }
//            setToLocalStorage();
//     })
// })


// const plus = document.querySelector(".plus")
// const minus = document.querySelector(".minus")
// const screen = document.querySelector(".screen")

// let screenNumber = Number(screen.innerText);

// plus.addEventListener("click",()=> {
//     screenNumber++;
//     screen.innerText = screenNumber;
//     setToLocalStorage();
// })

// minus.addEventListener("click",()=> {
//     if(screenNumber == 0) {
//         alert("you cannot decrease more than zero!")
//     }else {
//     screenNumber--;
//     screen.innerText = screenNumber;
//     }
//     setToLocalStorage();
// })
retrieveFromLocalStorage();


async function ProductPage (){
    const productIdFromLocalStorage =localStorage.getItem("productId");
    const productId = JSON.parse(productIdFromLocalStorage);

    const response = await fetch(`https://dummyjson.com/products/${productId}`)
    const  productInfo= await response.json();
    console.log(productInfo)

    productContainer.innerHTML = `
    <div class="product-imgs">
                <div class="main-img">
                    <img src="${productInfo.images[0]}" alt="">
                </div>
                <div class="thumbnails">
                    <img src="${productInfo.thumbnail}" width=""
                    height="100%" alt="">
                    <img src="${productInfo.thumbnail}" width="100%" alt="">
                </div>
            </div>

            <div class="product-info">
                <h1 class="title">${productInfo.title}</h1>
                <h4 class="category">${productInfo.tags[0]}</h4>
                <h5 class="price">${productInfo.price} <span>$</span></h5>
                <p class="info">${productInfo.description}</p>
                <div class="rating">
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <h6>${productInfo.rating}</h6>
                </div>
            

                <p class="stock">${productInfo.stock}</p>
                <button class="add-to-cart-btn"><i class="fa-solid fa-cart-shopping"></i>Add To Cart</button>
            </div>
    `
    

}

ProductPage();