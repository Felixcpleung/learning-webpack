var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

//2. [Use Client's material]    
//>> location of asset (e.g. css) 
//integrated by html-webpack-plugin into 'dist' 
app.use(express.static('dist'))

console.log(__dirname)

//1. [Use Client's material]    
//>> what html will user see when they go to your site "/" without following string ?
//integrated by html-webpack-plugin into 'dist/index.html'
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

//3. [Server's material]
//>>  designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

//
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
