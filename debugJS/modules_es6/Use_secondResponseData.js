import createHTML_by_categoryNames from './createHTML_by_categoryNames';

const Use_secondResponseData = (data, firstResponseData, O_O) => {
  const {secondResponseData} = O_O;
  const {dom_categoryNames} = O_O;
  const {dataForRender} = O_O;
  console.log('second data: ', data);

  data.forEach(function(item) {
    for(var i =0; i< secondResponseData.length; i++){
      if(item.id == secondResponseData[i].pogId){
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

  console.log('secondResponseData: ',secondResponseData );

};

function updated_dataForRender(updatedResponseData, dom_categoryNames, dataForRender) {
  console.log('updatedResponseData: ', updatedResponseData);
  updatedResponseData.forEach((item)=>{
    dom_categoryNames.forEach((this_categoryName, index)=>{
      if(item.categoryName == this_categoryName){
        dataForRender[index].push(item);
      }
    });
  });
  console.log('updated dataForRender: ', dataForRender);
}

function update_secondResponseData(data, firstResponseData, dom_categoryNames, O_O) {
    const {dataForRender} = O_O;
    const {dataLen} = O_O;
    const {secondResponseData} = O_O;
    _update_secondResponseData(data, secondResponseData);

    data.forEach(function(item) {
      for(var i =0; i< secondResponseData.length; i++){
        if(item.id == secondResponseData[i].pogId){
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
}

function _update_secondResponseData(data, secondResponseData) {
  if(!data){
    console.log('data not received. . .');
    return;
  }
  else {
    console.log('data found');
    console.log('data inside _update_secondResponseData: ', data);

    data.forEach(function(item) {
      /*
      secondResponseData.forEach((_item, index) => {
        if(item.id == _item.pogId){
        _item.displayPrice = item.displayPrice;
        _item.price = item.price;
        _item.avgRating = item.avgRating;
        _item.noOfRatings = item.noOfRatings;
        _item.discount = item.discount;
        _item.labelUrl = item.labelUrl;
        _item.sdGold = item.sdGold;
        _item.soldOut = item.soldOut;
        }
      });
      */
      for(var i =0; i< secondResponseData.length; i++){
        if(item.id == secondResponseData[i].pogId){
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
          //console.log('matching this_pogId_item: ', this_pogId_item);
        }
      }

    });
    console.log('updated inside secondResponseData: ', secondResponseData);
  }
}

export default Use_secondResponseData;
