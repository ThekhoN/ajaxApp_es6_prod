// +++++ BrowserDetection +++++ //
//UC Browser
var isUCBrowserX99 = navigator.userAgent.indexOf('UCBrowser') > 0;
var userAgentX99 = navigator.userAgent;

//Internet Explorer & Windows Phone
var isIE_mobileBrowser = navigator.userAgent.indexOf('Windows Phone 8.1') > 0;
var isIE_Browser = isIE_Browser_fn();
function isIE_Browser_fn() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");
    // If IE, return version number.
    if (Idx > 0) return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
    else return 0; //It is not IE
}
function isWindowsPhone_fn() {
  if(navigator.userAgent.match(/Windows Phone/i)){
    return true;
  }

  if(navigator.userAgent.match(/iemobile/i)){
    return true;
  }

  if(navigator.userAgent.match(/WPDesktop/i)){
    return true;
  }
}
var isWindowsPhone = isWindowsPhone_fn();

//android < 5
function getAndroidVersionX99(ua) {
    ua = (ua || navigator.userAgent).toLowerCase();
    var match = ua.match(/android\s([0-9\.]*)/);
    return match ? match[1] : false;
}
function getAndroidV4_ifTrueUSE_nonPromise(ua){
 var _getAndroidVersionX99 = getAndroidVersionX99(ua);
 var version0;
 //if android
 if(_getAndroidVersionX99){
  version0 = parseInt(_getAndroidVersionX99, 10);
  if(version0 < 5){
   //console.log('use non-promise based method');
   return true;
  }
  else {
   //console.log('use promise based method');
   return false;
  }
 }
 //not android return
 else {
  //console.log('not android');
  return false;
 }
}
var AndroidV4_ua = 'Mozilla/5.0 (Linux; Android 4.4; Nexus 4 Build/KRT16E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.105 Mobile Safari';
var isAndroidV4 = getAndroidV4_ifTrueUSE_nonPromise();
//console.log('isAndroidV4: ', isAndroidV4);

// +++++ mozilla +++++ //
function isMozillaAndroid_fn() {
  var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  var is_android = navigator.platform.toLowerCase().indexOf("android") > -1;
  if(is_firefox && is_android){
    return true;
  }
  else {
    return false;
  }
}
var isMozillaAndroid = isMozillaAndroid_fn();
// +++++ /mozilla +++++ //

const userAgentCheck_nonPromise = () => {
  if(isUCBrowserX99 || (isIE_Browser < 11 && isIE_Browser > 0) || (isIE_mobileBrowser) || (isWindowsPhone)){
      console.log('running legacy browser');
      return true;
  }
  else {
      console.log('NOT running legacy browser');
      return false;
  }
};
export default userAgentCheck_nonPromise;
// +++++ /BrowserDetection +++++ //
