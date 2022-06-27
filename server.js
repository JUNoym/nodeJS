const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes")

app.use(foodRouter)

// データベース接続
mongoose.connect(
    "mongodb+srv://Junya:abc@cluster0.3p9txxh.mongodb.net/?retryWrites=true&w=majority"
)
    .then(() => {
        console.log("接続成功した")
    })
    .catch((e) => {
        console.log(e.message)
    })

app.listen(3000, () => {
    console.log("3000でサーバーが立ち上がっているよ")
});