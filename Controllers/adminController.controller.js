const NoiseModel = require("../models/admin.model")
let load

const NoiseApi = (req, res) => {
    res.send(load) // you can set an api this way
}

const adminLandingPage = async(req, res)=>{
        try {
            load = await NoiseModel.find()
            if (!load) {
                console.log("Unable to fetch data");
            } else {
                 res.render("index")
                 console.log(load);
                // res.sendFile(__dirname + "/views/hi.html")
            }
        } catch (error) {
            console.log(error);
        }
}

const addNoiseMaker = (req, res)=>{
    res.render("addNoiseMaker", {message: "hey"})
}

const addCriminal = async (req, res) => {
    let name = req.body
    // console.log(name);
    let id = ''
    for (let i = 0; i < 4; i++) {
     id += Math.round(Math.random()*10)
    }
    id.length > 4 ? id.slice(0, -1) : ''
    name.id = id
    name.Degree = 1
    console.log(name);
    let saveCrim =  new NoiseModel(name)
        try {
            await saveCrim.save()
            if (err) {
                console.log("Error saving data");
            }
        } catch (error) {
        }
    // res.sendFile(__dirname + "/index.hbs")
    res.redirect("/admin")

}

const incr = async (req, res) => {
    let id = req.params.x
    // console.log(id);
    try {
        let editUser = (await NoiseModel.findOne({ id: id })).Degree;
        await NoiseModel.findOneAndUpdate({ id: id }, {Degree : editUser+1});

        if (!editUser) {
            console.log("User not found");
        } else {
            res.redirect("/admin")   
        }
    } catch (error) {
        console.log(error);
    }
}

const decr = async (req, res) => {
    let id = req.params.x
    
    try {
        let editUser = (await NoiseModel.findOne({ id: id })).Degree
        editUser == 1 ? editUser = 2 : ''
        
        await NoiseModel.findOneAndUpdate({ id: id }, {Degree : editUser-1});

        if (!editUser) {
            console.log("User not found");
        } else {
            res.redirect("/admin")
        }
    } catch (error) {
        console.log(error);
    }
}

const del = async (req, res) => {
    const id = req.params.x
    try {
        const deleteUser = await NoiseModel.findOneAndDelete({id: id})

        if (!deleteUser) {
            console.log("User not found");
            // alert("User  not found")
        } else {
            // alert("Pardoned! User has been deleted.")
            res.redirect("/admin")
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {adminLandingPage, NoiseApi, addNoiseMaker, addCriminal, incr, decr, del}