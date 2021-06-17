/*

(c)2021 Soumik mahato
powered by Soumik Softwares
git: https://github.com/soumiksoftwares/enginemega.git
License: MIT
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
super();
if(parse.length >0){

this.parse = parse;
}
else{
    return "attribute not defined";
}
}

get(){
    if(this.parse == 'three'){
        return "../engine/bin/libs/three.js";
        }
        if(this.parse == 'babylon'){
            return "../engine/bin/libs/babylon.js";
        }
        if(this.parse == 'jquery'){
            return "../engine/bin/libs/jquery.js";
        }
        if(this.parse == 'bootstrap'){
            return "../engine/bin/libs/bootstrap.js";
        }
}
}

class include {
    constructor(parse){

            this.parse = parse;

    }

    file(){
        if(this.parse === "undefined"){
            return "attribute is not defined";
        }else{
        if(this.parse == "three"){
            return "../engine/bin/libs/three";
        }
        if(this.parse == "babylon"){
            return "../engine/bin/libs/babylon";
        }
        if(this.parse == "jquery"){
            return "../engine/bin/libs/jquery";
        }
        if(this.parse == "bootstrap"){
            return "../engine/bin/libs/bootstrap";
        }
        if(this.parse == "css"){
            return "../engine/bin/libs/bootstrap.css";
        }
        if(this.parse == "objloader"){
            return "../engine/bin/libs/OBJLoader";
        }
        if(this.parse == "material"){
            return "../engine/bin/libs/MTLLoader";
        }
        if(this.parse == "ammo"){
            return "../engine/bin/libs/ammo";
        }
        if(this.parse == "physics"){
            return "../engine/bin/libs/physi";
        }
        if(this.parse == "stats"){
            return "../engine/bin/libs/stats";
        }
        if(this.parse == "pointer"){
            return "../engine/bin/libs/PointerLockControls";
        }
        if(this.parse == "gui"){
            return "../engine/bin/libs/dat.gui";
        }
        if(this.parse == "physics-worker"){
            return "../engine/bin/libs/physijs_worker";
        }
        if(this.parse == "howler"){
            return "../engine/bin/libs/howler";
        }
    }
    }
}

class libraryVersion extends Library {
  constructor(prams) {
    super();
    if(prams == 'babylon'){
      return this.babylon;
    }
    if(prams == 'three'){
      return this.three;
    }
    if(prams == 'jquery'){
      return this.jquery;
    }
    if(prams == 'bootstrap'){
      return this.bootstrap;
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
module.exports = {version, bgm, getInfo, cookie, Library, importLibs, include};
