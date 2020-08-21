'use strict';

const fs = require('fs');


//stores file.json into data as a string in it's origional form from file.json
let fileOpen = "Cobblestone Condencer - Copy.json"
let rawdata = fs.readFileSync(fileOpen);
let data0 = JSON.parse(rawdata);
let data = JSON.stringify(data0, null, 2); 
console.log(data); //Remove this eventually
console.log(data0); //Remove this too



fs.writeFileSync(fileOpen, data);  