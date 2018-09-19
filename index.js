const express = require('express');
const axios = require('axios');
const fetch = require('node-fetch');

const app = express();

app.get('/', (req, res) => {
    fetch("http://api.scb.se/OV0104/v1/doris/sv/ssd/START/ME/ME0104/ME0104D/ME0104T4")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log('Error occured'+err));
    res.send('Api callout happened');
});




const port = 3000 || process.env.NODE;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});