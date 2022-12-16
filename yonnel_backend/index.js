const express= require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

const app = express();
const PORT=3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,content-type,content");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', routes);


var db = require('./models');
db.sequelize.sync({/*force: true*/})
  .then(() => {
    console.log("Base de données bien synchronisée.");
  })
  .catch((err) => {
    console.log("Echec lors de la synchronisation: " + err.message);
  });


app.use(cors(),function(req, res, next) {
    res.header("Access-Control-Allow-Origin,Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,content-type,content",
    "http://localhost:4200"
  );
  });

app.listen(PORT, ()=>{console.log(`Serveur lancé sur localhost:${PORT}`)});
