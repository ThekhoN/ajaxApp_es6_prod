//polyfill es6-promise
require('es6-promise').polyfill();
import XHR_req from './modules/XHR_req';
import axios from 'axios';
var fastdom = require('fastdom');
import userAgentCheck_nonPromise from './modules/userAgentCheck_nonPromise';
import domQuery_getIds_updateContainers from './modules/domQuery_getIds_updateContainers';
import Use_firstResponseData from './modules/Use_firstResponseData';

//domLogX99
const errorLog3 = document.getElementById('errorLog3');

//console.log('createHTML_by_categoryNames: ', createHTML_by_categoryNames);
//global vars - expose these
const nonPromise = userAgentCheck_nonPromise();
//const nonPromise = true;
console.log('nonPromise - :', nonPromise);
const showSoldOut_g = false;
const finalHTML = [];
const dataForRender = [];
const dom_categoryNames = [];
const firstResponseData = [];
const secondResponseData = [];
const pogIdList_arr = [];
const dataLen = 0;
let firstUrl = '';
let Url_secondReq = '';
let myFastdom;

class AjaxPageApp {
  constructor(options){
    if(!options){
      options = {};
    }
    this.url = options.url?options.url:'';
    firstUrl = this.url;
    this.parentWrapper_id = options.parentWrapper_id?options.parentWrapper_id:'mainWrapperX_newX999';
    this.timerOfferUnits = options.timerOfferUnits?options.timerOfferUnits: false;
    this.showDiscount = options.showDiscount?options.showDiscount: false;
  }

  init(){
    domQuery_getIds_updateContainers('offers_WrapperX99', dom_categoryNames, dataForRender, finalHTML);
    const O_O = {
      firstResponseData,
      dom_categoryNames,
      dataForRender,
      nonPromise,
      showSoldOut_g,
      finalHTML,
      pogIdList_arr,
      firstUrl,
      secondResponseData,
      dataLen,
      Url_secondReq
    };

    //XHR_req(this.url,function(data){Use_firstResponseData(data, O_O);});
    if(nonPromise){
      console.log('running raw xhr. . .');
      XHR_req(this.url,function(data){Use_firstResponseData(data, O_O);});
    }
    else {
        window.myFastdomX99 = fastdom.extend(fastdomPromised);
        console.log('running axios. . .');
        axios.get(this.url)
          .then(function (response) {
            //console.log(response.data);
            let data = response.data;
            Use_firstResponseData(data, O_O);
          })
          .catch(function (err) {
            console.log('err in axios first req: ', err);
          });
    }

  }
  get_url(){
    //console.log('url: ' + this.url);
    return this.url;
  }

}

window.AjaxPageApp = AjaxPageApp;
