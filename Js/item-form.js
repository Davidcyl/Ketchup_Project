const formList = [];

function clearInput() {
    document.querySelector("#uploadImage").value = "";
    document.querySelector("#locationText").value  = "";
    document.querySelector("#cuisineBox").value  = "";
    document.querySelector("#descriptionText").value  = "";
}

function submitForm() {
    const picture = document.querySelector('#uploadImage').value;
    const location = document.querySelector('#locationText').value;
    const cuisine = document.querySelector('#cuisineBox').value;
    const description = document.querySelector('#descriptionText').value;
    
    const formDetails = {
        picture: picture,
        location: location,
        cuisine: cuisine,
        description: description
    };

    formList.push(formDetails);
    clearInput();

    console.log(formList);
    alert("Thank you for your submission.");
}