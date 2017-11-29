var express = require('express'); //bring in express library - require call makes it available
var path = require('path'); //bring in path library
var app = express(); // create express application by calling express function
var rootPath = path.normalize(__dirname + '/../'); //create root path dirname points at current path, /../ takes us up a directory to the root folder

app.use(express.static(rootPath + '/app')); // serve up pages using app.use, static function serves page i a given directory without processing them

app.listen(8000);

console.log('Listening on port 8000...');