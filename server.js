

// const express = require('express');


// ECMASCRIPT MODULE
// import colors from 'colors';
import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/DB.js';
import Choco_routes from './Routes/Choco_routes.js';




dotenv.config();
ConnectDB();
const app = express();
app.use(express.json());



console.log("Yeaahhh Running .........");


// listen the connections on the specified host and port
app.listen(3000, function () {
    console.log('listening on 3000')
})

// app.get(endpoint, callback)
app.get('/', (req, res) => {
    res.send('.get success !')
})



/* app.get('/fetchall', async () => {
    try {
        const allChocos = await CHOCO.find({});
        res.status(200).json(allChocos);
    }
    catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
}) */

// *************************     Replace the above way we can also write using app.use()     ******************************

// SYNTAX: app.use(path, callback)
app.use('/choco', Choco_routes);



// PORT = 4000 in the env
const port = process.env.PORT || 4000
app.listen(port, console.log(`Server Connected in ${port} for ${process.env.NODE_ENV}`));




/*

PORT = 4000
NODE_ENV = "Chocolate development"
MONGODB_URI = mongodb+srv://nihar_28:nihar_28@chocolate.r0x3m.mongodb.net/CRUD_mern?retryWrites=true&w=majority

*/