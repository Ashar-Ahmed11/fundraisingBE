const mongoose = require('mongoose')

const URI = 'mongodb+srv://akhuwat:UIAZGDS@akhuwat-database.l9ey8xt.mongodb.net/?retryWrites=true&w=majority&appName=akhuwat-database'
mongoose.set("strictQuery", false);
const connectToMongoose = () => mongoose.connect(URI, () => {
    console.log("Connected to Mongo Successfully")
})

module.exports = connectToMongoose