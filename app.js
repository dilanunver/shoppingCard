const products = [
  {
    id : '1',
    name: 'pants',
    category : 'outerwear',
    stock :  10,
    colors: { 'red': 5, ' gray': 5},
    price: 11.59,
    img: 'https://cdn.shopify.com/s/files/1/0493/2449/products/154104_WayfarerFIT101Pant_Opal-Grey_1.jpg?v=1491951291'
  }, 
  {
    id : '2',
    name: 'shirt',
    category : 'top',
    stock :  9,
    colors: { 'pink': 4, ' green': 5},
    price: 17.59,
    img: 'https://www.repertoirefashion.co.uk/images/emporio-armani-mens-pin-point-cutaway-regular-fit-pink-shirt-p30202-124715_image.jpg'
    
  }, 
  {
    id : '3',
    name: 't-shirt',
    category : 'top',
    stock :  12,
    colors: { 'red': 7, ' gray': 5},
    price: 8.19,
    img: 'https://images-na.ssl-images-amazon.com/images/I/517Nhj617jL._AC_UX342_.jpg'
  }, 
  {
    id : '4',
    name: 'hats',
    category : 'accessories',
    stock :  6,
    colors: { 'blue': 3, ' yellow': 3},
    price: 1.59,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYadD9fJbJ6aaMTBHhLHQj6oXQ7KAoXiofgKKYZboGQbbVZecoUEQME7a8E9uhuZGLfeQkhBfht-VWv0ImMUEQdOkD-cZ3cywB0xvFvTJcg-NMxJvsyIHD0g&usqp=CAE'
  }, 
  {
    id : '5',
    name: 'skirt',
    category : 'outerwear',
    stock :  7,
    colors: { 'blue': 3, ' yellow': 4},
    price: 7.59,
    img: 'https://cdn.kobisi.com/cdn/image/546/4559717/1/1200/1200/zigzagged-stitch-skirt-black.jpg'
  }, 
  {
    id : '6',
    name: 'glasses',
    category : 'accessories',
    stock :  8,
    colors: { 'white': 4, ' black': 4},
    price: 3.56,
    img: 'https://img-cdn1.cdnsbg.com/600/1/14/110092_1599492509372.jpg' 
  }, 
]

let storedItems = [];
const storingItems = document.querySelector('.storing-items');
const shoppingHolder = document.querySelector('.shopping-holder');

function renderShoppingProducts (){
  shoppingHolder.innerHTML = '';
  products.forEach(function(item) {
    const element = document.createElement('div');
    element.style.cssText = 'padding: 15px;'
    element.classList.add('products')
    element.setAttribute('data-id',  item.id)
    element.innerHTML = `
    <img src=${item.img} alt=${item.name} style="width: 100px; height: 100px;">
     <h1>${item.name}</h1>
     <h2>Colors : ${Object.keys(item.colors)} </h2>
     <h3>Price: ${item.price}</h3>
     <h4>Category : ${item.category}</h4>
     <h5>Stock: ${item.stock}</h5>
     <button type="button" class="buyButton">Buy</button>`
     const buyButton = element.querySelector('.buyButton');
     buyButton.addEventListener('click', buyingItems)
     shoppingHolder.appendChild(element)
  })
}
renderShoppingProducts()

function renderingStoredItems(){
  storingItems.innerHTML = '';
  storedItems.forEach(function(item){
    const element = document.createElement('div');
    element.style.cssText = 'padding: 15px;'
    element.classList.add('products')
    element.setAttribute('data-id',  item.id)
    element.innerHTML = `
    <img src=${item.img} alt=${item.name} style="width: 100px; height: 100px;">
     <h1>${item.name}</h1>
     <h2>Colors : ${Object.keys(item.colors)} </h2>
     <h3>Price: ${item.price}</h3>
     <h4>Category : ${item.category}</h4>
     <h5>Stock: ${item.stock}</h5>`
     storingItems.appendChild(element)
  })
}
renderingStoredItems()

function buyingItems(e){
  const element = e.currentTarget.parentElement;
  const id = element.dataset.id
  let selectedProduct;
  let sameSelectedProduct;
  for(let i = 0; i<products.length; i++){
    if(id === products[i].id){
     selectedProduct = products[i]
    console.log(selectedProduct)
    }
  }
  for(let i = 0; i<storedItems.length; i++){
    if(storedItems[i].id === selectedProduct.id){
      sameSelectedProduct = storedItems[i];
    }
  
  }
  if(sameSelectedProduct){
    selectedOperator.stock ++;

  } else {
    let selectedOperator = {...selectedProduct}
    console.log(selectedOperator)
    storedItems.push(selectedOperator)
    selectedOperator.stock=1
  }
 

  renderingStoredItems()
renderShoppingProducts()
}



