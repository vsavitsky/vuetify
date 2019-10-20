// server.js
const connectDB = require('./DB/Connection');
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
console.log('connectDB: ', connectDB);

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://connectionuser:connectionuser@pass@database-gqpy0.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})

const Video = mongoose.model('Video', { name: String })
const kitty = new Video({ name: 'test' })
kitty.save().then(() => console.log('teststr'))