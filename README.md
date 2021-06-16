<p align="center">
  <img src="https://images.hostmessage.info/login_logo/f8e66ecb91ee035df5ae20f0f4eaaa99.jpg">
</p>

# Engine-mega

<p align="center">
<img src="https://img.shields.io/badge/build-passing-brightgreen">
<img src="https://img.shields.io/badge/deployment-passing-brightgreen">
<img src="https://img.shields.io/badge/language-nodejs-red">
<img src="https://img.shields.io/badge/libs-Three.js-yellow">
<img src="https://img.shields.io/badge/libs-Babylon.js-lightblue">
<img src="https://img.shields.io/badge/libs-jquery-blue">
<img src="https://img.shields.io/badge/libs-bootstrap-lightgreen">

</p>

## Documentation

### Use of engine-mega

``` javascript
const { version, bgm, getInfo, cookie, Libary, importLibs } = require('../engine/bin/engine.js');

```
### Import it on your project
``` javascript

const engine = require('../engine/bin/engine.js');

```

### inbuild modules of Megaengine

## 1) Cookie

``` javascript
const engine = require('../engine/bin/engine.js');

//cookie
let cookie = new engine.cookie();

//set a cookie

cookie.set('name', 'value', 'days to expire');

//get a cookie
cookie.get('cookie_name');

//this class will return will the cookie value

```

## 2) include

``` javascript
const engine = require('../engine/bin/engine.js');

// module include

// let include three.js library
const three = new engine.include("three").file();

//just like this to include other library just replace three with libs name
const example = new engine.include("example").file();
```

## 3)audio

``` javascript
const engine = require('../engine/bin/engine.js');

//audio module

const audio = new engine.bgm("https://example.com/example.mp3"); // src of the audio
audio.play();

```

## 4)libraryVersion

#### Note that this module is only work on http

``` javascript

const engine = require('../engine/bin/engine.js');

//library module

const version = new engine.libraryVersion("three");//library name

//display the version module
console.log(version);

```
### Read other docs at [website](https://engineme.ga/docs)
