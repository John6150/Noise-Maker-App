const { ifError } = require('assert');
const express = require('express');
// const { url } = require('inspector');
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
const mongoose = require('mongoose')
const adminRoute = require("./Routes/admin.route")
const NoiseModel = require("./models/admin.model")


require("dotenv").config()
const PORT = process.env.PORT || 4000;
const URI = process.env.Mongo_URI

const connect = () => {
    try {
        const mongoConnect = mongoose.connect(URI)
        if (!mongoConnect) {
            console.log("Error connecting to DB");
        } else {
            console.log("Connected to DB");

        }
    } catch (error) {
        console.log(error);
    }
}

app.listen(PORT, () => {
    console.log("Server Started at port" + " " + PORT);
    connect()
})

app.use("/admin", adminRoute)

app.get("/", async(req, res)=>{
    try {
        load = await NoiseModel.find()
        if (!load) {
            console.log("Unable to fetch data");
        } else {
            // res.send(load)
             res.render("index", {message: "Hello there"})
            // res.sendFile(__dirname + "/views/hi.html")
        }
    } catch (error) {
        console.log(error);
    }
})



