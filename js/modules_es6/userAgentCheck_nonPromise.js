// +++++ BrowserDetection +++++ //
//UC Browser
const isUCBrowser = navigator.userAgent.indexOf('UCBrowser') > 0;



const userAgentCheck_nonPromise = () => {
  if(isUCBrowser || (navigator.userAgent.indexOf('MSIE') > 0)){
      console.log(`y u not support promises O_o`);
      return true;
  }
  else {
      console.log(`promises supported ;)`);
      return false;
  }
};
export default userAgentCheck_nonPromise;
// +++++ /BrowserDetection +++++ //
