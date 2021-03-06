'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var update_dataForRender = function update_dataForRender(data, O_O) {
  var secondResponseData = O_O.secondResponseData;


  data.forEach(function (item) {
    for (var i = 0; i < secondResponseData.length; i++) {
      if (item.id == secondResponseData[i].pogId) {
        var this_pogId_item = secondResponseData[i];
        //cache secondReq data
        var displayPrice = item.displayPrice;
        var price = item.price;
        var avgRating = item.avgRating;
        var noOfRatings = item.noOfRatings;
        var discount = item.discount;
        var labelUrl = item.labelUrl;
        var sdGold = item.sdGold;
        var soldOut = item.soldOut;

        this_pogId_item.displayPrice = displayPrice;
        this_pogId_item.price = price;
        this_pogId_item.avgRating = avgRating;
        this_pogId_item.noOfRatings = noOfRatings;
        this_pogId_item.discount = discount;
        this_pogId_item.labelUrl = labelUrl;
        this_pogId_item.sdGold = sdGold;
        this_pogId_item.soldOut = soldOut;
      }
    }
  });

  var dom_categoryNames = O_O.dom_categoryNames;
  var dataForRender = O_O.dataForRender;


  for (var k = 0; k < secondResponseData.length; k++) {
    var item = secondResponseData[k];
    for (var i = 0; i < dom_categoryNames.length; i++) {
      var this_categoryName = dom_categoryNames[i];
      if (item.categoryName == this_categoryName) {
        dataForRender[i].push(item);
      }
    }
  }

  console.log('updated dataForRender: ', dataForRender);
};

exports.default = update_dataForRender;