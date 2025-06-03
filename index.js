const connectToMongoose = require('./db'); // if this connects to MongoDB
const express = require('express');
var cors = require('cors')

connectToMongoose();
const app = express();
const port = 5000;


app.use(cors())
app.use(express.json())

app.use("/api/user", require("./routes/user"))
app.use("/api/number", require("./routes/number"))
app.use("/api/auth", require("./routes/auth"))

app.get('/', (req, res) => {
  res.send('Hello, Backend running!');
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});