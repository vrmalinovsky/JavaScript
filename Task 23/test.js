describe("Month Names", function() {
     
  it("month.name(2) should return Март", function() {
    assert.equal(month.name(2), "Март");
  });

  it("month.number('Ноябрь') should return 10 ", function() {
    assert.equal(month.number("Ноябрь"), 10);
  });

});

 