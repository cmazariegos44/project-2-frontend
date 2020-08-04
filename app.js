// ==NAV BAR ONLY==

// let firstDiv = $(".navbar").append('<div class ="brand-title"> Claudia\'s Store</div>')
// let firstAttr = $(".navbar").append('<a href ="#" class="toggle-button"><span class="bar"></span> <span class="bar"></span> <span class="bar"></span> </a>')
// let secondDiv = $(".navbar").append('<div class="navbar-links"><ul><li><a href="#"><a class="aaa" href="#startabout">About Us</a></a></li><li><a href="#"><a class="aaa" href="#skills">Home</a></a></li><li><a href="#"><a class="aaa" href="#portfolio">Shop</a></li></ul></div>')

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })
// ==NAV BAR ONLY end ==

const addItems = function(dataGet){
    //append something to root id
    for(var i = 0; i < dataGet.length; i++){
    $(".root").append(`<p class= "item">${dataGet[i].name}</p>`);
    $(".item").append(`<img src="${dataGet[i].url}"/>`);
    }
    console.log(dataGet, "This worked!")
}

axios.get('http://localhost:3000/shop/poop').then(response => {
    
  // gets the initial data
  addItems(response.data)
  console.log(response, "hello")
  console.log(response.data, "hi")
  
})




//Alex's CLASS WORK
// const $shopSelect = $("#createselect");
// const $shopEditSelect = $("#editselect");

// const getItems = async () => {
//     //API CALL USING ASYNC/AWAIT
//     const response = await fetch(`${URL}/shop`);
//     const data = await response.json();
//     //POPULATE SELECTOR WITH RETRIEVED DATA
//     data.forEach((shop) => {
//       const $option = $("<option>").attr("value", shop._id).text(shop.name);
//       $shopSelect.append($option);
//       const $option2 = $("<option>").attr("value", shop._id).text(shop.name);
//       $shopEditSelect.append($option2);
//     }); 
//   };

//   getItems()