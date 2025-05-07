const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes/userRoutes");
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(router);

mongoose.connect(process.env.MONGO_URL)
.then((res) => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
