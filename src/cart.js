let bascet = JSON.parse( localStorage.getItem("data") )  || [];

let calculate = () => {


    let cartIcon = document.getElementById("cartAmount");
      cartIcon.innerHTML = bascet.map((x) => x.item).reduce((x, y) => x + y, 0)


};
calculate();


