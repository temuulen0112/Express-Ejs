const express = require('express');
const app = express();
const fs = require('fs');

// app.get("/user/:id", (req, res, next) => {
//     const user_id = req.params.id;
//     if(user_id > 2000) next('route');
//     if(user_id < 50) next();
//     res.send('I will send user information #1');
// },
//     (req, res, next) => {
//         res.send('I will send user information #1.1')
//     })

// app.get("/user/:id", (req, res) => {
//     res.send('I will send user information #2')
// })

// function logOriginalUrl (req, res, next) {
//     console.log("Request URL:", req.originalUrl);
//     next();
// }
    
// function logMethod (req, res, next) {
//     console.log("Request Type:", req.method);
//     next();
// }
    
// var logStuff = [logOriginalUrl, logMethod];
// app.get("/arrayuser/:id", logStuff, (req, res, next) => {
//     res.send("User Info");
// })

function log (req, res, next) {
    console.log("Request URL:", req.originalUrl);
    //write
    fs.writeFile('/Users/mstars_lab1_07/Desktop/Express-ejs/user_activity_log.json', '\n UserID: ' + req.params.id , { flag: 'a+' }, err => {
        if(err) {
            console.error(err)
            return
        }
    })
    next();
}

app.get("/user/:id", log, (req, res, next) => {
    const user_id = req.params.id;
    if(user_id %2 === 0) {
        res.send('It is odd');
    }
    next('route');
})

app.get("/user/:id", (req, res) => {
    res.send('It is even');
})

module.exports = app;