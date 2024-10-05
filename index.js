const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})