const parentEle = document.querySelector(".carousel-inner")
const cardsEle = document.querySelector(".cards")
const cartEle = document.querySelector(".cart")
const cartColEle = document.querySelector('#cart-collection')
const modalEle = document.querySelector('.modal-content')
const showModalEle = document.querySelector('#modal')


const images = [
    "https://img.freepik.com/free-photo/two-mini-chicken-nuggets-burgers-served-with-french-fries-paper-box_141793-2458.jpg?t=st=1723302419~exp=1723306019~hmac=59d6d358aa53c1fcc4773ff79e7a96fb2d91be9acd589c97e5b2c2284ba0dd9d&w=740",
    "https://img.freepik.com/free-photo/three-mini-burgers-table_140725-2445.jpg?t=st=1723302441~exp=1723306041~hmac=fbbd9fa0c1957c97ec9a2d77c253e32482ca81a79b0523dbd072a3b528dedfb9&w=740",
    "https://img.freepik.com/free-photo/sandwich-hamburger-with-juicy-burgers-tomato-red-cabbage_2829-4118.jpg?t=st=1723302462~exp=1723306062~hmac=e939d1e8ffeec588ee9bc84ddd0b1b69133f29e80074dd23626bdb4b26c44c3c&w=740"
]

const cards = [
    {
        id: 1,
        name: "Buregere Karachi",
        price: 2400,
        description: "This is the burgera karachi",
        image: "https://img.freepik.com/premium-photo/photo-is-must-everyday-work-ai-generated-best-wonderful-photo_1088224-208119.jpg?w=740"
    },
    {
        id: 2,
        name: "Biryani Karachi",
        price: 400,
        description: "This is the biryani karachi",
        image: "https://img.freepik.com/free-photo/view-arrangement-with-delicious-burgers_23-2148308811.jpg?t=st=1723302775~exp=1723306375~hmac=e001a4537efe4ae3bbdf8578de468601b0839c1ed7a24915e7e4b2056f3f6c99&w=740"
    },
    {
        id: 3,
        name: "Halim Karachi",
        price: 2000,
        description: "This is the halim karachi",
        image: "https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637346.jpg?t=st=1723302783~exp=1723306383~hmac=3875c25398f0e9b1057c81c1b21de47c29885fa8d7224c65c9d335d0d1ce4bf4&w=740"
    },
    {
        id: 4,
        name: "Nehare Karachi",
        price: 1400,
        description: "This is the nehare karachi",
        image: "https://img.freepik.com/free-photo/fancy-dish-delicious-burgers-spices_23-2148374849.jpg?t=st=1723302768~exp=1723306368~hmac=9a0dacbf36e511740551002ede9af2c155dd1aa79e861915b98b25016742f7f3&w=740"
    },
    {
        id: 5,
        name: "Kabab Karachi",
        price: 2400,
        description: "This is the kabab karachi",
        image: "https://img.freepik.com/free-photo/homemade-tasty-sandwich-tomatoes-chicken-nuggets-onions-pepper-wooden-cutting-board-ketchup-fries-blurred-surface_179666-42647.jpg?t=st=1723303642~exp=1723307242~hmac=0bb550e4a16d8c0d03798a4e578079f7df233d288a5957be00ea85837aca025b&w=740"
    },
    {
        id: 6,
        name: "Lasbela Kabab",
        price: 1100,
        description: "This is the lasbela kabab",
        image: "https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637292.jpg?t=st=1723303650~exp=1723307250~hmac=01b4670189eac05a6d10eafb239b5faf9a8be54b24441b9648435093d488db58&w=740"
    }
]

try {
    images.map((image, i) => {
        parentEle.innerHTML += `
        <div class="carousel-item active">
                <img src=${image} class="d-block w-100" alt="image-${i}"/>
        </div>
        `
    })
} catch (error) {
    console.log(error);

}

try {
    cards.map(({ id, name, description, price, image }) => {
        cardsEle.innerHTML += `
        <div id=${id + "-" + name} class="card col-3 mx-3 my-3" style="width: 18rem;">
                <img src=${image} class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${description}</p>
                  <p>price: ${price}</p>
                  <a href="JavaScript:void(0)" onclick="addToCart(this)" class="btn btn-primary">Add to Cart</a>
                </div>
        </div>
        `
    })
} catch (error) {
    console.log(error);
}

const cart = []

function addToCart(el) {
    const image = el.parentNode.parentNode.childNodes[1].src
    const id = el.parentNode.parentNode.id
    const name = el.parentNode.childNodes[1].innerHTML
    const description = el.parentNode.childNodes[3].innerHTML
    const price = el.parentNode.childNodes[5].innerHTML

    for (let i = 0; i < cart.length; i++) {
        if (id === cart[i].id) {
            const qty = JSON.parse(localStorage.getItem("CARD"))[i].qty
            return (cart[i].qty++ && qty + 1)
        }

    }
    cart.push(
        {
            id: id,
            name: name,
            price: price.slice(7),
            description: description,
            image: image,
            qty: 1
        }
    )
    localStorage.setItem("CARD", JSON.stringify(cart))

    console.log(cart);

}

try {
    const total = JSON.parse(localStorage.getItem('CARD'))
    cartColEle.innerHTML = total.length
} catch (error) {
    console.log(error);
}

const savedCart = JSON.parse(localStorage.getItem("CARD"))

console.log(savedCart);

try {
    savedCart.map(({ id, name, description, price, image, qty }) => {
        cartEle.innerHTML += `
        <div id=${id + "-" + name} class="card col-3 mx-3 my-3" style="width: 18rem;">
                    <img src=${image} class="card-img-top" alt="image">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-text">${description}</p>
                      <p>price: ${price}</p>
                      <a
                      type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" href="JavaScript:void(0)" onclick="orderBtn(this)">Order now</a>
                    </div>
            </div>
        `
    })
} catch (error) {
    console.log(error);
}

function orderBtn(el) {
    const image = el.parentNode.parentNode.childNodes[1].src
    const id = el.parentNode.parentNode.id
    const name = el.parentNode.childNodes[1].innerHTML
    const price = el.parentNode.childNodes[5].innerHTML
    modalEle.innerHTML = `
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    <div class="modal-body">
          <div class="row">
            <div id=${id} class="col-6 border-dark">
              <img class="rounded" width="100%" src=${image} alt="">
            </div>
            <div class="col-6">
              <p>${name}</p>
              <p>Price: ${price}</p>
              <p class="d-none">1</p>
              <p>Quantity:<b class="count">1</b></p>
              <button class="btn btn-outline-success" onclick="add(this)">+</button>
              <button class="btn btn-outline-danger" onclick="minus(this)">-</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="orederClick(this)">Order now</button>
      </div>
    `

}

function add(el) {
    const initialqty = el.parentNode.childNodes[5]
    const counterEle = el.parentNode.childNodes[7].childNodes[1]

    counterEle.innerHTML = Number(counterEle.innerHTML) + Number(initialqty.innerHTML)
}

function minus(el) {
    const initialqty = el.parentNode.childNodes[5]
    const counterEle = el.parentNode.childNodes[7].childNodes[1]

    console.log(counterEle.innerHTML);
    if (counterEle.innerHTML < 1) {
        return
    }
    counterEle.innerHTML = Number(counterEle.innerHTML) - Number(initialqty.innerHTML)
}

const orders = []

function orederClick(el) {
    const productName = el.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[1].innerHTML
    const productPrice = el.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[3].innerHTML
    const productqty = el.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[7].childNodes[1].innerHTML
    const prouductId = el.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].id;
    alert("orrder succesful")
    for (let i = 0; i < orders.length; i++) {
        const { id, qty } = orders[i]
        console.log(qty, id);
        if (id === prouductId) {
            return qty + productqty
        }
    }
    orders.push(
        {
            id: prouductId,
            productName: productName,
            qty: productqty,
            productPrice: productPrice
        }
    )
    localStorage.setItem("ORDERS", JSON.stringify(orders))
    console.log(orders);
}