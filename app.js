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
    const item = dataGet[i];
      //variable for the items ID array
    const id = dataGet[i]._id;
    const itemDiv = $(`<div class="itemDiv">`)
    //div to print the items name
    itemDiv.append(`<div><p class= "item">${dataGet[i].name}</p></div>`);
    //div to show the URLs Image
    itemDiv.append(`<div class= "image"><img src="${dataGet[i].url}"></div>`);
    //Add to cart button (no functionality yet)
    itemDiv.append(`<button id="button1" class='btn btn-info'>Add to cart</button>`);
    //Variable for Add comment button ==========  button text ===== event listener on click == addComment funtcion
    const $button = $("<button class='btn btn-info'>").text("Add Comment").on("click", () => addComment(id));
    //appending add comment button to root div
    itemDiv.append($button);
    //appending the leave review input
    itemDiv.append(`<div class="review"><input type="text" id="comment-${id}"> Leave Review </input></div>`);//appending the rating input
    itemDiv.append(`<div id="ratingDiv"><input type="text" id="rating-${id}"> Rating </input></div>`);


    const commentDiv = $(`<div class="commentDiv">`)

    
    for(var j = 0; j < dataGet[i].reviews.length; j++){
      const reviewId = dataGet[i].reviews[j]._id;
      //  PRINTS THE COMMENT from array
       const $div1 = $(`<div>${dataGet[i].reviews[j].comment}</div>`);
       commentDiv.append($div1);
     //  PRINTS THE DELETE REVIEW BUTTON
     const deleteButton = $(`<button class="btn btn-secondary" itemId="${dataGet[i]._id}" commentid="${dataGet[i].reviews[j]._id}">`).text("Delete Review").on("click", () => deleteReview(id, reviewId ));
      // console.log(id, reviewId);
    commentDiv.append(deleteButton)
      //PRINTS THE RATING
      commentDiv.append(`<div class="rating1">${dataGet[i].reviews[j].rating}</div>`)
    }
    itemDiv.append(commentDiv)
    $(".root").append(itemDiv);

    } //FIRST FOR lOOP FUNCTION ENDS ===========

    console.log(dataGet, "This worked!")
  };


//pulling backend END
const addComment = async function(itemId){
      const review = {
        comment: $(`#comment-${itemId}`).val(),
        rating: $(`#rating-${itemId}`).val()
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

const deleteReview = async function(itemId, reviewId) {
        
       const response = await fetch("http://localhost:3000/shop/review/" + itemId + "/" + reviewId, 

       {
         method: "DELETE"
       }
       
       )
       console.log(response)
      };


const changeTitle = async function(responseData) {
  console.log(responseData, "this!!!")

};


//Attempt At AXIOS//
// gets the initial data for images and name
axios.get('http://localhost:3000/shop').then(response => {
  addItems(response.data)
  console.log(response, "hello")
  // console.log(response.data, "hi")
});
//Attempt At AXIOS//

axios.put("http://localhost:3000/shop/:id").then(response => {
  changeTitle(response.data)
});



// const update = async (req, res) => {
//   try{
//       const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
//       // const allGiphy = await giphy.find({});
//       res.status(200).json(updatedItem);
//   }
//   catch(error){
//       res.status(400).send(error)
//   }


//NEED CRUD






