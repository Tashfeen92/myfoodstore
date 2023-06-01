const dotenv = require('dotenv') // to load variables from .env file
dotenv.config({ path: './config.env' });

const express = require('express')
const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.use('/api', require("./router/createUser"));
app.use('/api', require("./router/displayPage"));
app.use('/api', require("./router/createUser"));
app.use('/api', require("./router/displayPage"));

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

global.foodData = require('./db/db')(function call(err, data, CatData) {
  // console.log(data)
  if (err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

