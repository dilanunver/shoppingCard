const products = [
  {
    id : '1',
    name: 'pants',
    category : 'outerwear',
    stock :  10,
    colors:  { yellow: {
      'img': 'https://gearmoose.com/wp-content/uploads/2019/11/Topo-Designs-Dual-Pant.jpg',
        'stock': 5
      }, 
        grey: {
          'img': 'https://gearmoose.com/wp-content/uploads/2019/08/Proof-Rover-Pants.jpg',
          'stock': 5
        }},
    price: 11.59
  }, 
  {
    id : '2',
    name: 'shirt',
    category : 'top',
    stock :  9,
    colors:  { blue: {
    'img': 'https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2fen%2f%7b41ED0F83-1DC4-4568-B273-4DBCCE756419%7d',
      'stock': 4
    }, 
      black: {
        'img': 'https://rendering.documents.cimpress.io/v1/vp/preview?scene=https://scene.products.cimpress.io/v1/scenes/3dba1cd7-7694-4313-aab9-1d0754b868c7&width=690&height=690&quality=80',
        'stock': 5
      }},
    price: 17.59
  }, 
  {
    id : '3',
    name: 't-shirt',
    category : 'top',
    stock :  12,
    colors:  { red: {
      'img': 'https://www.bluemint.com/content/images/thumbs/021/0215341_EDWARD_1200.jpeg',
      'stock': 7
    }, 
      pink: {
        'img': 'https://www.bluemint.com/content/images/thumbs/001/0011120_edward_1200.jpeg',
        'stock': 5
      }},
    price: 8.19
  }, 
  {
    id : '4',
    name: 'hats',
    category : 'accessories',
    stock :  6,
    colors:  { blue: {
      'img': 'https://cdn.shopify.com/s/files/1/0260/8116/5402/products/product-image-1391418096_2000x.jpg?v=1595519030',
      'stock': 3
    }, 
      grey: {
        'img': 'https://cdn.shopify.com/s/files/1/0260/8116/5402/products/product-image-1391418095_2000x.jpg?v=1595519030',
        'stock': 3
      }},
    price: 1.59    
  }, 
  {
    id : '5',
    name: 'skirt',
    category : 'outerwear',
    stock :  7,
    colors:  { orange: {
      'img': 'https://cdn.kobisi.com/cdn/image/546/4596116/1/1200/1200/maxi-stitch-skirt-orange.jpg?v=20191127225226',
      'stock': 3
    }, 
      yellow: {
        'img': 'https://cdn.kobisi.com/cdn/image/546/4559717/1/1200/1200/zigzagged-stitch-skirt-black.jpg',
        'stock': 4
      }},
    price: 7.59    
  }, 
  {
    id : '6',
    name: 'glasses',
    category : 'accessories',
    stock :  8,
    colors:  { red: {
      'img': 'https://ktnimg.mncdn.com/mnresize/868/1140/product-images/9KAK95028AA421/1500Wx1969H/9KAK95028AA421_G02_zoom2_V03.jpg',
      'stock': 4
    }, 
      black: {
        'img': 'https://ktnimg.mncdn.com/mnresize/868/1140/product-images/9KAK95028AA999/1500Wx1969H/9KAK95028AA999_G01_zoom1_V02.jpg',
        'stock': 4
      }},
    price: 3.56
  }, 
]
console.log(products[5].colors.red.img)



let renderingArrayOfItems = [];
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
    <img src=${Object.values(item.colors)[0].img} alt=${item.name} style="width: 100px; height: 100px;">
     <h1>${item.name}</h1>
     <h2><button type="button" class="dropDown">chose a color</button>
     <div id="myDropdown" class="dropdown-content" style="display:flex; flex-direction:column;  ">
    <a href="#" style="text-decoration:none; padding:7px 5px;">${Object.keys(item.colors)[0]}</a>
    <a href="#" style="text-decoration:none; padding:7px 5px;">${Object.keys(item.colors)[1]}</a>
  </div> </h2>
     <h3>Price: ${item.price}</h3>
     <h4>Stock: ${item.stock }
     ${item.stock <= 0 ? 
      `<button type="button" class="buyButton" disabled >Buy</button>` : 
      `<button type="button" class="buyButton" style="cursor: pointer;">Buy</button>`}</h4> 
     <h5>Category : ${item.category}</h5>
     `
     console.log(Object.keys(item.colors)[0])
     const buyButton = element.querySelector('.buyButton');
     buyButton.addEventListener('click', buyingItems)
     shoppingHolder.appendChild(element)
  })
}
renderShoppingProducts();

function renderSelectingItems(){
  storingItems.innerHTML= '';
  renderingArrayOfItems.forEach( item => {
    const element = document.createElement('div');
    element.style.cssText = 'padding: 15px;'
    element.classList.add('products')
    element.setAttribute('data-id',  item.id)
    element.innerHTML = `
    <img src=${Object.values(item.colors)[0].img} alt=${item.name} style="width: 100px; height: 100px;">
     <h1>${item.name}</h1>
     <h2>Colors : ${Object.keys(item.colors)[0]} </h2>
     <h3>Price: ${item.price}</h3>
     <h4>Quantity: ${item.stock} </h4>
      `
     storingItems.appendChild(element)
  })
  renderShoppingProducts()
}
renderSelectingItems()


function buyingItems(e){
  const element = e.currentTarget.parentElement.parentElement;
  
  const id = element.dataset.id;
  let selectingIdenticalItem;
  let findingItem =  products.find( item => {
    return id === item.id;
    })
   
    selectingIdenticalItem = renderingArrayOfItems.find( item =>{
    return id === item.id
  })
  if(selectingIdenticalItem){
    selectingIdenticalItem.stock++;
    
  } else {
    let selectedOperator = {...findingItem};
  
    renderingArrayOfItems.push(selectedOperator)    
    selectedOperator.stock = 1;
    
  }
  findingItem.stock--;
  console.log(findingItem.stock)
 
 
  renderSelectingItems();
  renderShoppingProducts()
}







