const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8080;

const db = require("./models");


const app = express();

// const databaseName = "workoutdb"

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

// Requiring our routes

app.use("/api", require("./routes/api-routes.js"));
app.use("/", require("./routes/html-routes.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});