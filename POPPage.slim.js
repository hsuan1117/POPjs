/*!
 * POPjs JavaScript Library V1.0.1
 * License: MIT
 * File: POPPage.slim.js
 * Date: 2020-02-29T23:05+08:00
 */
function popunder(s,t){
  if(!t){
    t=location.href;
  };
  var h=window.open(t,"_blank");
  location.href=s;
}
