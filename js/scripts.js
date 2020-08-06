//business logic
function documentType(card){
  this.cardType = card;
  this.cardDetails = [];
}

function cardDetails(number, firstName, lastName, contact, dropOff){
  this.cardNumber = number;
  this.cardFirstName = firstName;
  this.cardFirstName = lastName;
  this.cardContact = contact;
  this.cardDropOffPoint = dropOff;
}

function searcher(number, name){
  this.searcherNumber = number;
  this.searcherName = name;
  this.searcherContact = [];
}

function searcherContact(email, phone){
  this.searcherEmail = email;
  this.searcherPhone = phone;
}

//user interface logic
$(document).ready(function(){
  $("#finder").submit(function(event){
    event.preventDefault();
    console.log("here");

    var inputtedCardType = $("select#documents").val();
    var newDocumentType = new documentType(inputtedCardType);

    var inputtedNumber = $("input#documentNo").val();
    var inputtedFirstName = $("input#fname").val();
    var inputtedLastName = $("input#lname").val();
    var inputtedEmail = $("input#email").val();
    var inputtedDropoff = $("input#dropoff").val();
    var newCardDetails = new cardDetails(inputtedNumber, inputtedFirstName, inputtedLastName, inputtedEmail, inputtedDropoff);
    newDocumentType.cardDetails.push(newCardDetails);
    alert("Thank you for your submission!");
    

    //$("div#filer-alert").append("<p>" + "Thank you for submitting the card details for " + inputtedNumber + "</p>")

  });

  $("#loser").submit(function(event){
    event.preventDefault();

    var inputtedSearcherNumber = $("input#docNo").val();
    var inputtedSearcherName = $("input#f-name").val();
    var newSearcher = new searcher(inputtedSearcherNumber, inputtedSearcherName);

    var inputtedSearcherEmail = $("input#e-mail").val();
    var inputtedSearcherPhone = $("input#phone").val();
    var newSearcherContact = new searcherContact(inputtedSearcherEmail, inputtedSearcherPhone);
    newSearcher.searcherContact.push(newSearcherContact);
    
  });

    
});