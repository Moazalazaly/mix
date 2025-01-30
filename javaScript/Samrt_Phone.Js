const container = document.querySelector('.products')

//-------------------- get all products--------------------------

async function getProducts() {

  const response = await fetch('https://dummyjson.com/products/category/smartphones')
  const data = await response.json()


  data.products.forEach(item => {
    const a = document.createElement("a");
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = ` 
          <div class="rating-container">
          <i class="star rating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
           </svg> <span >${item.rating}</span></i> 
           <button class="fav">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
          </button>
          </div>
          
        <img src="${item.images[0]}" alt="${item.title}">
        <div class="product-details">
          <h2>${item.title}</h2>
          <p class="category"> ${item.category}</p>
          <p class="price">$${item.price}</p>
          <p class="stock">${item.stock} in stock</p>
          <button class="add-to-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
             Add to Cart
          </button>     
        </div>`

    a.href = "../html/indexSp.html";
    container.appendChild(a)
    a.appendChild(card);

    card.addEventListener("click", async () => { // getting the id of card clicked and saving it in local storage : new
      const ID = item.id;
      console.log(ID)
      const savedID = JSON.stringify(ID);
      localStorage.setItem("productId", savedID);
    });

  })
}
getProducts();




//---------------------------- add to cart -------------------------------------------------------------

// const addtocart = document.querySelectorAll(".add-to-cart")
// for (const btn of addtocart) {
//   btn.addEventListener("click", (e) => {


//   })

// }






//------------------------ open single product details ----------------------------------------------------------------------


















//--------------------------- Search For product  ------------------------------------------------------------------

// const searchItem = document.getElementById("");
// const searchbtn = document.getElementById("")

// searchbtn.addEventListener("click", (e) => {
//   fetch(https://dummyjson.com/products/search?q=${searchItem.value})
//     .then(function (response) {
//       return response.json()
//     })
//     .then((response) => {
//       Alldata = response.products
//       carditem.innerHTML = "";
//       for ( const data of Alldata) {
//         carditem.innerHTML +=
//           `<div class="rating-container">
//           <i class="star rating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//           </svg> <span >${item.rating}</span></i>
//          </div>
//        <img src="${item.images[0]}" alt="${item.title}">
//        <div class="product-details">
//          <h2>${item.title}</h2>
//          <p class="category"> ${item.category}</p>
//          <p class="price">$${item.price}</p>
//          <p class="stock">${item.stock} in stock</p>
//          <button class="add-to-cart">
//            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
//              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
//            </svg>
//             Add to Cart
//          </button>
//        </div>`
//  }

//     })
// })