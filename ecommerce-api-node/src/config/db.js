const mongoose = require("mongoose")

const mondbUrl="mongodb+srv://splkobnrs:f9MVsXyqtlygjNb6@cluster0.sx1kbnm.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}