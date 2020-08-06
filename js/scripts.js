//BUSINESS LOGIC
function identityDocument(card){
  this.cardType = card;
  this.cardDetails = [];
}
function cardDetails(number, firstName, lastName, contact, dropOff){
  this.cardNumber = number;
  this.cardFirstName = firstName;
  this.cardLastName = lastName;
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
//USER INTERFACE LOGIC
//TOGGLE BUTTONS

$(document).ready(function(){
  $('#findIt').click(function(){
    $('#findIt').slideUp();
    $('#findBox').show();
  });
  $('#loseIt').click(function(){
    $('#loseIt').slideUp();
    $('#loseBox').show();
  });
  //SUBMIT SECTION FOR FORM

  $("#finder").submit(function(event){
    event.preventDefault();
    var inputtedCardType = $("select#finderDocumentInput").val();
    var newidentityDocument = new identityDocument(inputtedCardType);
    var inputtedNumber = $("input#documentNo").val();
    var inputtedFirstName = $("input#fname").val();
    var inputtedLastName = $("input#lname").val();
    var inputtedEmail = $("input#email").val();
    var inputtedDropoff = $("input#dropoff").val();
    var newCardDetails = new cardDetails(inputtedNumber, inputtedFirstName, inputtedLastName, inputtedEmail, inputtedDropoff);
    newidentityDocument.cardDetails.push(newCardDetails);
    alert('Thank you for submitting the card details for ' + inputtedNumber )
    // $("#filer-alert").style.display = "block";
    //$("div#filer-alert").append("<p>" + "Thank you for submitting the card details for " + inputtedNumber + "</p>")
  });
  $("#loser").submit(function(event){
    event.preventDefault();
    var inputtedDocumentType = $("select#searcherDocumentInput").val();
    var inputtedSearcherNumber = $("input#docNo").val();
    var inputtedSearcherName = $("input#f-name").val();
    var newSearcher = new searcher(inputtedDocumentType, inputtedSearcherNumber, inputtedSearcherName);
    // searcherIdentityDocument(inputtedDocumentType, inputtedSearcherNumber);
    if (inputtedSearcherNumber === "111"){
      alert('Mambo '+inputtedSearcherName+ " Your document has been found ");
      $("#searcher-alert").style.display = "flex";
    }
    else {
      $('#searcher-contact').show();
      $('#searcher-contact').submit(function(){
        var inputtedSearcherEmail = $("input#e-mail").val();
        var inputtedSearcherPhone = $("input#phone").val();
        var newSearcherContact = new searcherContact(inputtedSearcherEmail, inputtedSearcherPhone);
        newSearcher.searcherContact.push(newSearcherContact);
        (alert('We will reach out to you on the number or email: '+inputtedSearcherEmail +' '+inputtedSearcherPhone));

      })


      
    }
    
  });
});
