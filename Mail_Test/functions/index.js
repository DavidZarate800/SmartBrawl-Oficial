const functions = require('firebase-functions');
const express = require('express');
const { response } = require('express');
const cors = require('cors');
const app =express();
app.use(cors());

app.get('/api',(req,res)=>{
    res.json("hola mundo desde Node JS!");
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
