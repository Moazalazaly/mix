const body = document.querySelector(".TableBody"); 
const total = document.querySelector(".total"); 

let cartItems = JSON.parse(localStorage.getItem("Cart")) || []; 

for (let i = 0; i < cartItems.length; i++) {

    let Name = cartItems[i].item.title;
    let price = cartItems[i].item.price;
    let quantity = cartItems[i].quantity;

    body.innerHTML += `
       <tr>
         <td>${Name}</td>
         <td class="item-price">$${price.toFixed(2)}</td> 
         <td>${quantity}</td>
       </tr>
    `;
}

// total 
let totalSum = 0;
for (let i = 0; i < cartItems.length; i++) {

    let price = cartItems[i].item.price;
    let quantity = cartItems[i].item.quantity;
    
    totalSum += price * quantity; 
}

total.textContent = `$${totalSum.toFixed(2)}`; 

