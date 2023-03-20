const mongoose = require("mongoose");


const connectMongo = async()=>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to mongo');
}

module.exports = connectMongo;