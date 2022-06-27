const express = require("express");
const app = express();
const foodModel = require("../models/Food")

app.use(express.json())

app.get("/foods", async (req, res) => {
    const foods = await foodModel.find({})

    try {
        res.send(foods)
    } catch (e) {
        res.status(500).send(e)
    }
});

app.post("/food", async (req, res) => {
    const food = new foodModel(req.body);

    try {
        await food.save();
        res.send(food);
    } catch (e) {
        res.status(500).send(e)
    }
})

// データの部分修正を行うAPI
app.patch("/food/:id", async (req, res) => {
    try {
        await foodModel.findByIdAndUpdate(req.params.id, req.body)
        await foodModel.save()
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = app