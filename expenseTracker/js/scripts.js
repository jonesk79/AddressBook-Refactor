var Purchase = {
  allItems: [],
  createPurchase: function(description, price) {
    var newPurchase = Object.create(Purchase)
    newPurchase.description = description;
    newPurchase.price = price;
    Purchase.allItems.push(newPurchase);
    return newPurchase;
  },
};

$(document).ready(function() {
  $("form#expenseTracker").submit(function(event) {
    event.preventDefault();
    var inputtedDescription = $("input#inputDescription").val();
    var inputtedCost = $("input#inputCost").val(); //parse int?
    var tempPurchase = Purchase.createPurchase(inputtedDescription, inputtedCost);

    $(".outputDescription").empty();
    $(".outputPrice").empty();
    Purchase.allItems.forEach(function(purchase) {
      $(".outputDescription").append("<br>" + purchase.description);
      $(".outputPrice").append("<br>" + purchase.price);
    });
  });
});

