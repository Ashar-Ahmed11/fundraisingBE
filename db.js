const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://akhuwat:UIAZGDS@akhuwat-database.l9ey8xt.mongodb.net/?retryWrites=true&w=majority&appName=akhuwat-database"

const connectToMongoose = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to Mongoose successfully');
  } catch (error) {
    console.error('Error connecting to Mongoose:', error.message);
  }
};

module.exports = connectToMongoose;