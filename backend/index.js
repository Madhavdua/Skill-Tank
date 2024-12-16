const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT;


const db = require("./db");
const URI = process.env.URI;
db.connect(URI);

// to avoid cors error
let cors = require('cors')
app.use(cors());

// to avoid req. body is undefined i use below 2 statements
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send("Hello ")
})

const path = require('path');

const userRoute= require('./Routes/user');
app.use('/api',userRoute);

const salesRoute=require('./Routes/sales');
app.use('/api',salesRoute);

app.listen(port, () => {
    console.log("app is listening at port ", port)
})
