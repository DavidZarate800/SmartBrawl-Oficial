const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require("express");
const { response } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const configMensaje = require("./configMensaje");
var serviceAccount = require("./serviceAccountKey.json");
const app = express();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pruebaachida.firebaseio.com'
});
const db = admin.firestore();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get("/api",cors(corsOptions),(req, res) => {
  res.json("hola mundo desde Node JS!");
});

app.post("/form", (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
});


app.get('/get', (req, res) =>
{
 db.collection('Cellphones').doc('QmBMhZDrNOfppqXqSrAo').get('Brand').then(doc=>{
  res.json(doc);
  return;
  
}).catch();
});


app.get('/getdoc/:id',(req, res)=>{

  db.collection('Cellphones').doc(req.params.id).get().then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      res.json(doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    return;
  }).catch();

});


app.get('/getall',(req,res)=>{
  celulares = [];
  db.collection("Cellphones").get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      celulares.push(doc.data());
      
    });
    return;
  }).catch();
  console.log("INFO=====>",celulares);
  res.send(celulares);
});



app.post('/add', (req, res) => {
  const cellphone = {
      Brand: req.body.marca,
      CPU: req.body.cpu,
      Name: req.body.nombre,
      OS: req.body.os,
      Resolution: req.body.resolucion,
      URL_IMG: req.body.imgURL,
      URL_QR: req.body.qrURL,
      Weight: req.body.weight,
      Battery: req.body.battery,
      Camera: req.body.camera,
      Dimensions: req.body.dimensions,
      Display: req.body.display,
      PPI: req.body.ppi,
      Price: req.body.price,
      RAM: req.body.ram,
      Storage: req.body.storage

  };
  db.collection('Cellphones').add(cellphone);
  res.send({ result: "Succesful" });
})


app.post('/update/:id', (req, res) => {
  const cellphone = {
    Brand: req.body.marca,
    CPU: req.body.cpu,
    Name: req.body.nombre,
    OS: req.body.os,
    Resolution: req.body.resolucion,
    URL_IMG: req.body.imgURL,
    URL_QR: req.body.qrURL,
    Weight: req.body.weight,
    Battery: req.body.battery,
    Camera: req.body.camera,
    Dimensions: req.body.dimensions,
    Display: req.body.display,
    PPI: req.body.ppi,
    Price: req.body.price,
    RAM: req.body.ram,
    Storage: req.body.storage
  };
  db.collection('Cellphones').doc(req.params.id).update(cellphone);
  res.send({ result: "Succesful" });
})



app.delete('/del/:id', (req, res) =>
{
 db.collection('Cellphones').doc(req.params.id).delete().then(doc=>{
  res.json("Borrado!");
  return;
}).catch();


});



exports.apis = functions.https.onRequest(app);
