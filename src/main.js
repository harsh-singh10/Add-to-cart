let shop = document.getElementById("shop")



let bascet = JSON.parse( localStorage.getItem("data") )  || [];







let generateShop = () => {

    return (shop.innerHTML = shopItems.map((x) => {
        let search = bascet.find( (p)=> p.id ===x.id ) || []
        return `
        <div id = "product-id-${x.id} "  class="item">
                <img width="220" src=" ${x.img} " alt="">
                <div class="details">
                    <h3>${x.name} </h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <div class="price-quantity">
                        
                            <h2> $ ${x.price} </h2>
                        
                        <div class="buttons">
    
                            <i onclick = "decrement(${x.id})" class="bi bi-dash-lg"></i>
                            <div id = "${x.id}" class="quantity">
                            ${search.item == undefined? 0 : search.item}
                            </div>
                            <i onclick = "increment(${x.id})" class="bi bi-plus-lg"></i>
    
                        </div>
                    </div>
                </div>
            </div>`
    }).join(""));
}
generateShop();

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


    
    // console.log(bascet);

    update(selectedItem.id);
    localStorage.setItem("data" , JSON.stringify(bascet));
};
let decrement = (id) => {
    let selectedItem = id

    let search = bascet.find((x) => x.id === selectedItem.id)
    if(search == undefined) return;
    else if (search.item === 0) {
        return
    }
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    bascet = bascet.filter( (x) => x.item !==0 );


   
    //console.log(bascet);
    
    localStorage.setItem("data" , JSON.stringify(bascet)); 
};
let update = (id) => {

    let search = bascet.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    console.log(search.item)
    calculate();
};

let calculate = () => {


    let cartIcon = document.getElementById("cartAmount");
      cartIcon.innerHTML = bascet.map((x) => x.item).reduce((x, y) => x + y, 0)
      


};
calculate();