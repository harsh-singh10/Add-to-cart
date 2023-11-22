let bascet = JSON.parse(localStorage.getItem("data")) || [];

let calculate = () => {


  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = bascet.map((x) => x.item).reduce((x, y) => x + y, 0)


};
calculate();

// console.log(shopItems);



let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let generateCartItems = () => {
  if (bascet.length !== 0) {
    return (shoppingCart.innerHTML = bascet
      .map((x) => {
        let { id, item } = x;
        let search = shopItems.find((y) => y.id === id) || [];
        return `
        <div class="cart-item">
          <img width="100" src=${search.img} alt="" />
          
             <div class="details">
                <div class="title-price-x">
                <h4 class="title-price">
                 <p>${search.name}</p>
                 <p class="cart-price">$ ${search.price}</p>
                </h4>
                
                <i onclick = "remove(${x.id})" class="bi bi-x-lg"></i>
                </div>

              <div class="buttons">
    
                  <i onclick = "decrement(${x.id})" class="bi bi-dash-lg"></i>
                 <div id = "${x.id}" class="quantity">${item}</div>
                 <i onclick = "increment(${x.id})" class="bi bi-plus-lg"></i>

            </div>

                <h3>$ ${item * search.price}</h3>
            </div>
        </div>
          `;
      }).join(""))

  }
  else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
        <h2> Your cart is Empty </h2>
        <a href = "index.html" > 
        <button class="home"> Go to Home</button> </a> `;

  }
}
generateCartItems();


let increment = (id) => {
  let selectedItem = id

  let search = bascet.find((x) => x.id === selectedItem.id)

  if (search === undefined) {
    bascet.push({
      id: selectedItem.id,
      item: 1
    })
  }
  else {
    search.item += 1;
  }



  generateCartItems();

  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(bascet));
};
let decrement = (id) => {
  let selectedItem = id

  let search = bascet.find((x) => x.id === selectedItem.id)
  if (search == undefined) return;
  else if (search.item === 0) {
    return
  }
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  bascet = bascet.filter((x) => x.item !== 0);



  generateCartItems()

  localStorage.setItem("data", JSON.stringify(bascet));
};
let update = (id) => {

  let search = bascet.find((x) => x.id === id)
  document.getElementById(id).innerHTML = search.item
  //console.log(search.item)
  calculate();
  totalAmount();
};

let remove = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  bascet = bascet.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  totalAmount();
  calculate();
  localStorage.setItem("data", JSON.stringify(bascet));
}

let clearCart = () => {
  bascet = [];
  generateCartItems();
  calculate();
  localStorage.setItem("data", JSON.stringify(bascet));
}

let totalAmount = () => {

  if (bascet.length !== 0) {

    let amount = bascet.map((x) => {
      let search = shopItems.find((y) => y.id === x.id)


      return x.item * search.price;
    }).reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2> Total bill = $ ${amount} </h2>
    <button class="checkOut">Checkout</button>
    <button onclick ="clearCart()" class="removeall">Clear cart</button>
    `
  }
  else return;


}

totalAmount();











