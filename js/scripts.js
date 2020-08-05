//business logic
function documentType(card){
  this.cardType = card;
  this.cardDetails = [];
}

function cardDetails(number, name, contact, location, dropOff){
  this.cardNumber = number;
  this.cardName = name;
  this.cardContact = contact;
  this.cardLocation = location;
  this.cardDropOffPoint = dropOff;
}

function searcher(number, name, contact){
  this.searcherNumber = number;
  this.searcherName = name;
  this.searcherContact = contact;
}

//user interface logic
$(document).ready(function(){
  $("form#finder").submit(function(event){
    event.preventDefault();

    var inputtedCardType = $("select#documents").val();
    var newDocumentType = new documentType(inputtedCardType);

    var inputtedFirstName = $("input#fname").val();
    var inputtedLastName = $("input#lname").val();
    var inputtedEmail = $("input#email").val();
    var inputtedLocation = $("input#location").val();
    var inputtedDropoff = $("input#dropoff").val();
    var newCardDetails = new cardDetails(inputtedFirstName, inputtedLastName, inputtedEmail, inputtedLocation, inputtedDropoff);
    newDocumentType.cardDetails.push(newCardDetails);

  });

  $("form#loser").submit(function(event){
    event.preventDefault();

    var inputtedSearcherNumber = $("input")
  });
});