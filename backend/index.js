const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');


dotenv.config({ path: 'backend/config/config.env' });
const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});