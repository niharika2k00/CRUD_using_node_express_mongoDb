

import mongoose from 'mongoose';
const { Schema } = mongoose;


const ChocoSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    size: {
        type: String
    },

    created_time: {
        type: String,
        default: new Date(Date.now()).toLocaleString()
    },
}, { timestamp: { createdAt: 'created_time' } })  // 2nd arguement 



// mongoose.model(modelName, schema)
const Choco = mongoose.model('Chocolate', ChocoSchema)
export default Choco;