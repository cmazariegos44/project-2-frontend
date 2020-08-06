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

//DONT TOUCH ARCHIVED CODE =======================
const addItems = function(dataGet){
    //append something to root id
    for(var i = 0; i < dataGet.length; i++){
    const id = dataGet[i]._id;
    $(".root").append(`<div><p class= "item">${dataGet[i].name}</p></div>`);
    $(".root").append(`<div><img src="${dataGet[i].url}"></div>`);
    // $(".root").append(`<button id="button1">Add to cart</button>`);
    const $button = $("<button class='btn btn-info'>").text("Add Comment").on("click", () => addComment(id));
    $(".root").append($button);
    $(".root").append(`<div class="review"><input type="text" id="comment"> Leave Review </input></div>`);
    $(".root").append(`<div><input type="text" id="rating"> Rating </input></div>`);
    }
    console.log(dataGet, "This worked!")
}

//IMPROVED FROM ABOVE TO BE IN A DIV =======================
// const addItems = function(dataGet){
//   //append something to root id
//   console.log(dataGet, "THIS IS MY DATA")
//   for(var i = 0; i < dataGet.length; i++){
//   const id = dataGet[i]._id;
//   $(".root").append(`<div class="container"><div><p class="${dataGet[i].name}">${dataGet[i].name}</p></div><div><img src="${dataGet[i].url}"></div><div class="review"><input type="text" id="comment"> Leave Review </input></div><div><input type="text" id="rating"> Rating </input></div><button class='btn btn-info'>Add Comment</button><button>See Reviews</button></div>`)
//   const $button = $('btn btn-info').on("click", () => addComment(id));
//   // $(".root").append($button);
//   console.log(dataGet[i], "This is it!")
//   }


// for(var k = 0; k < dataGet.length; k++){
//   for(var j = 0; j < dataGet[k].reviews.length; j++){
//     // $(`.${dataGet[k].name}`).append(`<div>${dataGet[k].reviews[j].comment}</div><button itemId="${dataGet[k]._id}" commentId="${dataGet[k].reviews[j]._id}">Delete Review</button>`)
//     const $div = $('<div>').text(dataGet[k].reviews[j].comment)
//     const $button1 = $('<button class="deleteButton">').attr('data-itemid',dataGet[k]._id).attr('data-commentid', dataGet[k].reviews[j]._id).text('Delete Review').on("click", deleteComment)
//     $div.append($button1)
//     $(`.${dataGet[k].name}`).append($div)
//   }
// }

// const deleteComment = async (event) => {
//   console.log(event.target.dataset.itemid)
//   console.log(event.target.dataset.commentid)
// }


//pulling backend END

const addComment = async function(itemId){
      const review = {
        comment: $("#comment").val(),
        rating: $("#rating").val()
      }
      console.log(itemId);

      const response = await fetch("http://localhost:3000/shop/review/" + itemId, 
            {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(review)
          }
      )
};



// const deleteReview = async function(itemId){
//   const reviews = {
//     comment: $("#reviews").val()
//   }
//   console.log(itemId);

//   const response = await fetch("http://localhost:3000/shop/review/" + itemId, 
//         {
//           method: "DELETE",
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(review)
//       }
//   )
// };


//Attempt At AXIOS//
// gets the initial data for images and name
axios.get('http://localhost:3000/shop').then(response => {
  addItems(response.data)
  console.log(response, "hello")
  // console.log(response.data, "hi")
})
//Attempt At AXIOS//


//NEED CRUD






