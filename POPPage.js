/*!
 * POPjs JavaScript Library V1.0.1
 * License: MIT
 * File: POPPage.js
 * Date: 2019-06-11T21:48+08:00
 */
function POPPage(underUrl,url,settings){
  this.version="1.0.0";
  if(settings){
    if(settings["postback"]){
      this.postback="?ok="+settings["postback"]
    }else{
      this.postback="?ok=popunder"
    }
    if(settings["point"]){
      this.hash="#"+settings["point"]
    }else{
      this.hash="#"
    }
  }
  
  //bottom URL
  this.underUrl=underUrl;
  
  //top URL
  if(!url){
    this.url=(location.href.replace(location.search,""))+this.postback+this.hash
  }else{
    this.url=url+this.postback+this.hash
  }
  
}
POPPage.prototype.under=function(){
  //now page
  var h=window.open(this.url,"_blank")
  //under page
  location.href=this.underUrl
}
POPPage.prototype.up=function(){
  //now page
  var h=window.open(this.underUrl,"_blank")
  //under page
  location.href=this.url
}
POPPage.prototype.postbackHandler=function(S){
  var para=new URLSearchParams(location.search);
  if(S){
    for(var prop in S){
      if(para.get("ok")==prop){
        S[prop]();
      }
    }
  }
}

window.POPPage=POPPage
window.pop=function(t,s,set){
  if(set){
    return new POPPage(t,s,set);
  }else{
    return new POPPage(t,s);
  }
}
