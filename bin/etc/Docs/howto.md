# Documentation
## How to include it on project
``` javascript

const { version, bgm, getInfo, cookie, Libary, importLibs } = require('../engine/bin/engine.js');
```
## How to set cookie
### Set a cookie
``` javascript
//import
const engine = require('../engine/bin/engine.js');

let cookie = new engine.cookie;
cookie.set("name", "value", "exdays");
```
