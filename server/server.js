const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
});