let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click',()=>{

    body.classList.add('active');
})

closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})

let products = [
   {
    id:1,
    name:' personal care', 
    image:'../images/personalcare.webp ',
    price:379.000
   } ,
   {
    id:2,
    name:'boro plus doodh body lotion', 
    image:'../images/boroplusdoodh bodylotion.webp',
    price:199.000
   },
   {
    id:3,
    name:'lemon grass hands wash', 
    image:'../images/lemongrass handswash.webp',
    price:100.000
   },
   {
    id:4,
    name:'omega-3 frish oil', 
    image:'../images/omega-3frishoil.webp',
    price:180.000
   }
   ,
   {
    id:5,
    name:'shikakai shampoo', 
    image:'../images/shikakai shampoo.webp',
    price:100.000
   },
   {
    id:6   ,
    name:'anti-bac wet wipes', 
    image:'../images/anti-bac wet wipes.webp',
    price:160.000
   },
   {
   id:7,
   name:' appollo product', 
   image:'../images/apollo_products.webp ',
   price:300.000
},
  {
   id:8,
   name:'baby care', 
   image:'../images/babycare.webp',
   price:200.000
  },
  {
   id:9,
   name:'sampletablet1', 
   image:'../images/sampletablet1.jpg',
   price:100.000
  },
//   {
//    id:10,
//    name:'sampletablet2', 
//    image:'../images/sampletablet2.jpg',
//    price:100.000
//   }
//   ,
//   {
//    id:11,
//    name:'glucometer_strips', 
//    image:'../images/glucometer_strips.webp',
//    price:150.000
//   },
//   {
//    id:12,
//    name:'cetaphil restoraderm skin', 
//    image:'../images/cetaphil restoraderm skin restoring body moisturiz.jpg',
//    price:160.000
//   },
];
let listCards = [];
function intiApp(){
  products.forEach((value,key)=>{
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `<img src="../images/${value.image}"/>
     <div class="title">${value.name}</div>
     <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Card</button>

    `;

    list.appendChild(newDiv);
})
}  

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity=1;
    

    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML=`
            <div><img src="../images/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
            </div>
            

            `;

            listCard.appendChild(newDiv);
        }
    })
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
}

function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];
            }
            else{
                listCards[key].quantity = quantity;
                listCards[key].price=quantity*products[key].price;
            }
            reloadCard();
}


intiApp(); 



    // <div class="title">${value.name}</div>
    // <div class="price">${value.price.toLocalString()}</div>
    // <button onclick="addToCard(${key})">Add To Card</button>








    // <div>${value.quantity}</div>

// 
// 
// 

function search(){
    let searchBar=document.querySelector('.search-box').value.toUpperCase();
    let searchList=document.querySelector('.list');
    let productItem=document.querySelectorAll('item');
    let productTitle=document.querySelectorAll('.title')
   



    for (let i = 0;i<productTitle.length;i++)
    {
        if(productTitle[i].innerHTML.toUpperCase().indexOf(searchBar) >=0){
                   productItem[i].style.display ="";

        }
        else{
            
            productItem[i].style.display="none"
            
        }
    }
}




// productTitle[i].style.display ="none";



