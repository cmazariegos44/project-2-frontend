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


//TRYING AGAIN PART 2 =======================
const addItems = function(dataGet){
    //loop through the items array 
    for(var i = 0; i < dataGet.length; i++){
      //variable for the items ID array
    const id = dataGet[i]._id;
    //div to print the items name
    $(".root").append(`<div><p class= "item">${dataGet[i].name}</p></div>`);
    //div to show the URLs Image
    $(".root").append(`<div><img src="${dataGet[i].url}"></div>`);
    //Add to cart button (no functionality yet)
    $(".root").append(`<button id="button1" class='btn btn-info'>Add to cart</button>`);
    //Variable for Add comment button ==========  button text ===== event listener on click == addComment funtcion
    const $button = $("<button class='btn btn-info'>").text("Add Comment").on("click", () => addComment(id));
    //appending add comment button to root div
    $(".root").append($button);
    //appending the leave review input
    $(".root").append(`<div class="review"><input type="text" id="comment"> Leave Review </input></div>`);//appending the rating input
    $(".root").append(`<div><input type="text" id="rating"> Rating </input></div>`);
    } //FIRST FOR lOOP FUNCTION ENDS ===========
    console.log(dataGet, "This worked!")
//for loop again through the items level of array
    for(var k = 0; k < dataGet.length; k++){
      const id = dataGet[k]._id;
      //for loop through the reviews level of array one step down from items
      for(var j = 0; j < dataGet[k].reviews.length; j++){
        const reviews = dataGet[j]._id;
        //PRINTS THE COMMENT from array
        $(".root").append(`<div>${dataGet[k].reviews[j].comment}</div>`);
        //PRINTS THE RATING (AND ADDS DELETE BUTTON FOR NOW)
        $(".root").append(`<div>${dataGet[k].reviews[j].rating}</div><button class="btn btn-secondary" itemId="${dataGet[k]._id}" ratingid="${dataGet[k].reviews[j]._id}">Delete Rating</button>`);

        
        const $div1 = $('<div>').text(dataGet[k].reviews[j].comment);
        //ARCHIVED
        // const $button1 = $(`<button itemiid="${dataGet[k]._id}" commentid="${dataGet[k].reviews[j]._id}">`).attr('data-commentid', dataGet[k].reviews[j]._id).text('Delete Review').on("click", deleteComment);
        const $button1 = $(`<button class='btn btn-info' commentid="${dataGet[k].reviews[j]._id}">`).attr('dataGet-commentid', dataGet[k].reviews[j]._id).text('Delete Review').on("click", deleteComment);
        $(".root").append($button1)
        // $(`.${dataGet[k].name}`).append($div1)
      }
    }
  }


  const deleteComment = async (event) => {
    console.log(event.target.dataSet.itemId)
    console.log(event.target.dataSet.commentid)
  }



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



const deleteReview = async function(itemId){
  console.log(itemId);

  const response = await fetch(`"http://localhost:3000/shop/review/${dataGet[k].reviews[j]._id}`, {
    method: "delete",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
})}



//Attempt At AXIOS//
// gets the initial data for images and name
axios.get('http://localhost:3000/shop').then(response => {
  addItems(response.data)
  console.log(response, "hello")
  // console.log(response.data, "hi")
})
//Attempt At AXIOS//


//NEED CRUD






