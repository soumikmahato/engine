/*

(c)2021 Soumik mahato 
powered by Soumik Softwares
git: https://github.com/soumiksoftwares/enginemega.git
*/
class version {
constructor(){
    return "1.0.4";
}
}
class getInfo{
    constructor(gamename){
        this.gamename = gamename;
        console.log(`${gamename} is powered by engine mega. (c)2021 by Soumik Mahato. Libary used babylon.js and three.js`);

    }
}
class bgm{
    constructor(src){
        this.src = src;
        //src for the background music
        
    }
    play(){
        let a = document.createElement("audio");
        document.body.appendChild(a);
        a.load();
        a.autoplay = true;
        a.controls = false;
        a.play();
    }
}
class cookie{
    constructor(){
        let _cookieEnable = navigator.cookieEnabled;
        if(_cookieEnable){

        }
        else{
            return "error cookie not enable";
        }
    }
    get(cname){
        var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "undefined";
    }

    remove(cname){
        document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    set(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    read(){
        var cookieread = document.cookie;
  	    return cookieread;
    }
    setTz(namep){
        let intlTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        set(namep, intlTz, time);
    }
}

class Library {
    constructor(){
        const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const res = JSON.parse(this.responseText);
  
}
xmlhttp.open("GET", "metadata.mega");
xmlhttp.send();
    }


getVersion (){
let BabyLon = res.plugins.babylonjs;
let Three = res.pugins.threejs;
let Jquery = res.plugins.jquery;
let Bootstrap = res.plugins.bootstrap;

//define this
this.babyLon = BabyLon;
this.three = Three;
this.jquery = Jquery;
this.bootstrap = Bootstrap;
}
}

class importLibs extends Library {
constructor(parse){
if(!parse == 'undefined'){
super();
if(parse == 'three'){
return "../engine/bin/libs/"+this.three;
}
if(parse == 'babylon'){
    return "../engine/bin/libs/"+this.babylon;
}
if(parse == 'jquery'){
    return "../engine/bin/libs/"+this.jquery;
}
if(parse == 'bootstrap'){
    return "../engine/bin/libs/"+this.bootstrap;
}
}
else{
    return "attribute not defined";
}
}
}
/*
File Structure
res/
    node_modules/
    src/
        index.html
        index.js
       
    engine/
    package.json
        
*/

//exports modules
module.exports = {version, bgm, getInfo, cookie, Libary, importLibs};