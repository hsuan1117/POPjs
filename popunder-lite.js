/*
 * POPPage JS  
 * 張睿玹版權所有 
 * Copyright Chang-Jui-Hsuan from Republic Of China
 * https://github.com/dwcoop/POPPageJS/license.html
 * 檔案/File: popunder-lite.js
 * 版本/Version: V1.0.0
 * 日期/Date: 2019-06-11T21:48Z
 */
function popunder(s,t){
  if(!t){
    t=location.href;
  };
  var h=window.open(t,"_blank");
  location.href=s;
}