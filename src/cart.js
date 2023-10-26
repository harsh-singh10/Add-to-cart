let bascet = JSON.parse( localStorage.getItem("data") )  || [];

let calculate = () => {


    let cartIcon = document.getElementById("cartAmount");
      cartIcon.innerHTML = bascet.map((x) => x.item).reduce((x, y) => x + y, 0)


};
calculate();



let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let generateCart = ()=>{
    if(bascet.length !== 0){
       return (shoppingCart.innerHTML = bascet.map( (x)=>{
        return `     <div class="cart-items">Hello</div>  `
       } ).join("") ) 
    }
    else{
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2> Your cart is Empty </h2>
        <a href = "index.html" > 
        <button class="home"> Go to Home</button> </a> `;

    }
}
generateCart()