const functions = require("firebase-functions");
const express = require("express");
const { response } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const configMensaje = require("./configMensaje");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.json("hola mundo desde Node JS!");
});

app.post("/form", (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
