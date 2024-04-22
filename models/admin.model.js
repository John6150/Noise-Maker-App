const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    fullName: { type: String, required: true, unique: true },
    Degree: { type: Number },
    id: { type: Number},
})

const NoiseModel = mongoose.model("NoiseList", UserSchema)

module.exports = NoiseModel