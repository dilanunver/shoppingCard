const products = [
  {
    id: '1',
    name: 'pant',
    category: 'outerwear',
    stock: 10,
    colors: {
      yellow: {
        'img': 'https://gearmoose.com/wp-content/uploads/2019/11/Topo-Designs-Dual-Pant.jpg',
        'stock': 5,
        selectedStock: 0
      },
      grey: {
        'img': 'https://gearmoose.com/wp-content/uploads/2019/08/Proof-Rover-Pants.jpg',
        'stock': 5,
        selectedStock: 0
      }
    },
    price: 11.59,
    selectedColor: 'yellow'
  },
  {
    id: '2',
    name: 'shirt',
    category: 'top',
    stock: 9,
    colors: {
      blue: {
        'img': 'https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2fen%2f%7b41ED0F83-1DC4-4568-B273-4DBCCE756419%7d',
        'stock': 4,
        selectedStock: 0
      },
      black: {
        'img': 'https://rendering.documents.cimpress.io/v1/vp/preview?scene=https://scene.products.cimpress.io/v1/scenes/3dba1cd7-7694-4313-aab9-1d0754b868c7&width=690&height=690&quality=80',
        'stock': 5,
        selectedStock: 0
      }
    },
    price: 17.59,
    selectedColor: 'blue'
  },
  {
    id: '3',
    name: 't-shirt',
    category: 'top',
    stock: 12,
    colors: {
      red: {
        'img': 'https://www.bluemint.com/content/images/thumbs/021/0215341_EDWARD_1200.jpeg',
        'stock': 7,
        selectedStock: 0
      },
      pink: {
        'img': 'https://www.bluemint.com/content/images/thumbs/001/0011120_edward_1200.jpeg',
        'stock': 5,
        selectedStock: 0
      }
    },
    price: 8.19,
    selectedColor: 'red'
  },
  {
    id: '4',
    name: 'hat',
    category: 'accessories',
    stock: 6,
    colors: {
      blue: {
        'img': 'https://cdn.shopify.com/s/files/1/0260/8116/5402/products/product-image-1391418096_2000x.jpg?v=1595519030',
        'stock': 3,
        selectedStock: 0
      },
      grey: {
        'img': 'https://cdn.shopify.com/s/files/1/0260/8116/5402/products/product-image-1391418095_2000x.jpg?v=1595519030',
        'stock': 3,
        selectedStock: 0
      }
    },
    price: 1.59,
    selectedColor: 'blue'
  },
  {
    id: '5',
    name: 'skirt',
    category: 'outerwear',
    stock: 7,
    colors: {
      orange: {
        'img': 'https://cdn.kobisi.com/cdn/image/546/4596116/1/1200/1200/maxi-stitch-skirt-orange.jpg?v=20191127225226',
        'stock': 3,
        selectedStock: 0
      },
      yellow: {
        'img': 'https://cdn.kobisi.com/cdn/image/546/4559717/1/1200/1200/zigzagged-stitch-skirt-black.jpg',
        'stock': 4,
        selectedStock: 0
      }
    },
    price: 7.59,
    selectedColor: 'orange'
  },
  {
    id: '6',
    name: 'glass',
    category: 'accessories',
    stock: 8,
    colors: {
      red: {
        'img': 'https://ktnimg.mncdn.com/mnresize/868/1140/product-images/9KAK95028AA421/1500Wx1969H/9KAK95028AA421_G02_zoom2_V03.jpg',
        'stock': 4,
        selectedStock: 0
      },
      black: {
        'img': 'https://ktnimg.mncdn.com/mnresize/868/1140/product-images/9KAK95028AA999/1500Wx1969H/9KAK95028AA999_G01_zoom1_V02.jpg',
        'stock': 4,
        selectedStock: 0
      }
    },
    price: 3.56,
    selectedColor: 'red'
  },
]

let renderingArrayOfItems = [];
const storingItems = document.querySelector('.storing-items');
const shoppingHolder = document.querySelector('.shopping-holder');


function renderShoppingProducts() {
  shoppingHolder.innerHTML = '';
  products.forEach(function (item) {
    const element = document.createElement('div');
    element.style.cssText = 'padding: 15px;'
    element.classList.add('products')
    element.setAttribute('data-id', item.id)
    element.innerHTML = `
    <img src=${item.colors[item.selectedColor].img} alt=${item.name} style="width: 100px; height: 100px;">
     <h1>${item.name}</h1>
     <label for="colors">Choose a color</label>
     <select id="colors">
     ${Object.keys(item.colors).map(color => (`
      <option ${item.selectedColor === color ? 'selected' : ''} value=${color} >${color}</option>
      `
    ))}   
     </select>
     <h3>Price: $${item.price}</h3>
     <h4>Stock: ${item.colors[item.selectedColor].stock}
     ${item.stock <= 0 ?
        `<button type="button" class="buyButton" disabled >Buy</button>` :
        `<button type="button" class="buyButton" style="cursor: pointer;">Buy</button>`}</h4> 
     <h5>Category : ${item.category}</h5>
     `
    const colors = element.querySelector("#colors");

    colors.addEventListener('change', chooseOneColor);
    const buyButton = element.querySelector('.buyButton');
    buyButton.addEventListener('click', buyingItems)
    shoppingHolder.appendChild(element)
  })
}
renderShoppingProducts();

function chooseOneColor(e) {
  const element = e.target.parentElement;
  const id = element.dataset.id;

  let selectingItem = products.find(item => {
    return id === item.id
  })
  selectingItem.selectedColor = e.target.value;

  renderShoppingProducts()
}


function renderSelectingItems() {
  storingItems.innerHTML = '';
  renderingArrayOfItems.forEach(item => {
    const element = document.createElement('div');
    let sum = 0;
    Object.values(item.colors).forEach(color => {
      sum += color.selectedStock
    })
    element.style.cssText = 'padding: 15px;'
    element.classList.add('products')
    element.setAttribute('data-id', item.id)
    element.innerHTML = `
    <img src= ${item.colors[item.selectedColor].img} alt=${item.name} style="width: 100px; height: 100px;">
      <h1>${item.name}</h1>
      ${Object.keys(item.colors).map(color => {
      if (item.colors[color].selectedStock <= 0) {
        return ''
      } else {
        return `<h2>${color} :
          ${item.colors[color].selectedStock}
        </h2>`
      }
    }).join('')}
     <h3>Price: $${(item.price * item.colors[item.selectedColor].selectedStock).toFixed(2)}</h3>
    <h4>Quantity: ${sum} </h4>
      `

    storingItems.appendChild(element)
  })
  renderShoppingProducts()
}
renderSelectingItems()


function buyingItems(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  let selectingIdenticalItem;
  let findingItem = products.find(item => {
    return id === item.id;
  })


  selectingIdenticalItem = renderingArrayOfItems.find(item => {
    return id === item.id
  })
  if (selectingIdenticalItem) {
    selectingIdenticalItem.colors[findingItem.selectedColor].selectedStock++
    console.log(selectingIdenticalItem.colors[findingItem.selectedColor])


  } else {
    let selectedOperator = { ...findingItem };

    renderingArrayOfItems.push(selectedOperator)
    selectedOperator.colors[selectedOperator.selectedColor].selectedStock = 1;


  }
  findingItem.stock--;



  renderSelectingItems();
  renderShoppingProducts()
}







