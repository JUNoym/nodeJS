const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    calories: {
        type: Number,
        default: 0,
        required: true
    },
})

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food