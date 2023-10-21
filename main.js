let shop = document.getElementById("shop")


let shopItems = [ 
    {
        id : "c1",
        name: "casual shirt",
        price : 25,
        desc : "Lorem, ipsum dolor sit amet consectetur adipisicing",
        img : "images/img-1.jpg"
    } ,
    {
        id : "c2",
        name: "shirt",
        price : 85,
        desc : "Lorem, ipsum dolor sit amet consectetur adipisicing",
        img : "images/img-2.jpg"
    },
    {
        id : "c3",
        name: "T- shirt",
        price : 255,
        desc : "Lorem, ipsum dolor sit amet consectetur adipisicing",
        img : "images/img-3.jpg"
    },
    {
        id : "c4",
        name: "Formal",
        price : 295,
        desc : "Lorem, ipsum dolor sit amet consectetur adipisicing",
        img : "images/img-4.jpg"
    }
];




let generateShop = ()=>{

    return (shop.innerHTML = shopItems.map((x)=>{
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
                            <div id = "${x.id}" class="quantity">0</div>
                            <i onclick = "increment(${x.id})" class="bi bi-plus-lg"></i>
    
                        </div>
                    </div>
                </div>
            </div>`
    } ) .join("") );
}
generateShop();

let increment = (id) => {
    console.log(id);
};
let decrement = (id)=>{
    console.log(id);
};
let update = ()=>{};