const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('demo'));

const port = 8000;
const server = app.listen(port, listening);

// We can use arrow function like this :
// const server = app.listen(port, () => {console.log(`running on localhost : ${port}`)})

function listening() {
    console.log("server is running");
    console.log(`running on localhost : ${port}`);
};