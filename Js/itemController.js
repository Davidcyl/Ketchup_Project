class ItemsController {

constructor (currentId=0) {
    this.items = [];
    this.currentId=currentId;
}

addReview (userID, imageURL, location, rating, cuisine, description) {

    const reviewItem = {
        userID: userID,
        imageURL: imageURL,
        location: location,
        rating: rating,
        cuisine: cuisine,
        description: description
    }
    this.items.push(reviewItem);
}

displayReview() {

    let showreviewItem = "";
    this.items.forEach ((items, index) => {
        showreviewItem +=
        `
        <div class="col-lg-3 col-md-6 g-4">
            <div class="card" style="width: 20rem">
                <div>Username: ${items.userID} </div>
              <img src=${items.imageURL} class="card-img-top" alt="..."/>
              <div class="card-body">
                <p>Location: ${items.location} &nbsp Rating: ${items.rating}</p>
                <p>Cuisine: ${items.cuisine}</p>
                <p>Description: ${items.description}<p>
              </div>
            </div>
          </div>
        `
    })
    document.querySelector("#reviewDetail").innerHTML=showreviewItem;
    console.log(this.items);

};

}

const items = new ItemsController();

items.addReview ("001", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "West", "4/5", "Chinese", "Must Try");
items.addReview ("002", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Central", "4/5", "Western", "Worth the calories");
items.addReview ("003", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "North", "4/5", "Italian", "Absolutely delicious");
items.addReview ("004", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "East", "4/5", "Chinese", "Worth queueing for");
items.addReview ("005", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "South", "4/5", "Fine Dining", "Michelin quality");
items.addReview ("006", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "West", "4/5", "Malay", "Sengat sedap");

items.displayReview();




