

import express from 'express';
import asyncHandler from 'express-async-handler';
import CHOCO from '../Models/Chocolate_model.js';







// @desc       Fetch all the Chocolates
// @Route      GET/choco                http://localhost:4000/choco/fetchall/
// @access      public

const fetch_all = async (req, res) => {   // Fetch all 6 products from the backend
    try {
        const allChocos = await CHOCO.find({});
        res.status(200).json(allChocos);
    }
    catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
};




// @desc       ADD CHOCOLATE
// @Route      POST/choco               http://localhost:4000/choco
// @access      public

const add_Chocolate = async (req, res) => {
    console.log(req.body)

    try {
        // const Chocolate = await CHOCO.create(req.body);
        const chocoObject = new CHOCO(req.body);
        const Created_Item = await chocoObject.save();
        // console.log(Chocolate);
        res.status(201).json(Created_Item)

    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
}




// @desc      FETCH using ID
// @Route      GET/choco/                http://localhost:4000/choco/:id
// @access      public

const fetchByID = async (req, res) => {
    try {
        const ID = req.params.id;
        console.log(ID);
        // res.send(ID)
        const singleChocoData = await CHOCO.findById({ _id: ID })
        res.status(202).send(singleChocoData);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
}




// @desc       UPDATE Note
// @Route      PUT/choco/:id                http://localhost:4000/choco/:id
// @access      public
const update_Chocolate = asyncHandler(async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        size: req.body.size,
    }

    const ID = req.params.id;
    console.log(data);

    // findByIdAndUpdate(ID , DATA , CALLBACK)   
    const updatedData = await CHOCO.findByIdAndUpdate(ID, req.body, { new: true });
    res.status(202).send(updatedData);
});




// @desc       DELETE Chocolate
// @Route      DELETE/choco/:id              http://localhost:4000/choco/:id
// @access      public

const delete_Chocolate = asyncHandler(async (req, res) => {           /* asyncHandler --> will catch the err */
    const ID = req.params.id;
    await CHOCO.findByIdAndRemove(ID);
    res.send('Chocolate Deleted Successfullly');
});





export { add_Chocolate, fetch_all, fetchByID, delete_Chocolate, update_Chocolate };