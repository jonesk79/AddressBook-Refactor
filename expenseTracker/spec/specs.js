describe("Purchase", function() {
 describe("createPurchase", function() {
  /*it('returns purchase object with description and price', function() {
    var testPurchase = Purchase.createPurchase("doritos", 2);
    testPurchase.price.should.equal(2);
    testPurchase.description.should.equal("doritos");
    Purchase.allItems.should.eql([testPurchase]);
  });*/

  it("should not override previous purchases in allItems", function() {
    var testPurchase = Purchase.createPurchase("fritos", 4);
    Purchase.allItems.should.eql([testPurchase]);
  });
 });
});
