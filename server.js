const express = require("express");
const mongoose = require("mongoose");
const path = require('path')

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.use(express.static(path.join(__dirname, '/public')));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});