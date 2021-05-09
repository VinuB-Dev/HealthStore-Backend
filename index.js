const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors());

const {connection} = require("./db_connect");

connection();
const product_router = require("./routes/product.router")

app.use('/products', product_router)

app.get('/', (req, res) => {
  res.send("Welcome to HealthStore Api")
});

app.use((req, res) => {
  res.status(404).json({ sucess: false, message: "route not found on server please check" })
})

app.listen(3000, () => {
  console.log('server started');
});



