// ==NAV BAR ONLY==

let firstDiv = $(".navbar").append('<div class ="brand-title"> Claudia\'s Shop</div>')
let firstAttr = $(".navbar").append('<a href ="#" class="toggle-button"><span class="bar"></span> <span class="bar"></span> <span class="bar"></span> </a>')
let secondDiv = $(".navbar").append('<div class="navbar-links"><ul><li><a class="aaa" href="#startabout">About Us</a></li><li><a class="aaa" href="#skills">Shop</a></li><li><a class="aaa" href="#contact">Contact</a></li></ul></div>')

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
// ==NAV BAR ONLY end ==


//get data from BACKEND 

const addItems = function(dataGet){
    //append something to root id
    for(var i = 0; i < dataGet.length; i++){
    $(".root").append(`<p class= "item">${dataGet[i].name}</p>`);
    $(".item").append(`<img src="${dataGet[i].url}">`);
    // return -1;
    }
    console.log(dataGet, "This worked!")
}
//pulling backend END




//Attempt At AXIOS//
// gets the initial data for images and name
axios.get('http://localhost:3000/shop/poop').then(response => {
  addItems(response.data)
  console.log(response, "hello")
  // console.log(response.data, "hi")
})
//Attempt At AXIOS//


//NEED CRUD

//Alex's GIPHY CODE
// const shops = document.querySelector('.shops')

// function addPictures (shopData) {
//   // Adds all of the gifs to the dom
//   shops.innerHTML = ''
//   shopData.forEach(shop => {
//     if (!shop.url) return

//     const imageNode = document.createElement('img')
//     imageNode.setAttribute('src', shop.url)
//     imageNode.classList.add('shop')

//     imageNode.addEventListener('click', () => { editModal(shop) })

//     shops.appendChild(imageNode)
//   })
// }





