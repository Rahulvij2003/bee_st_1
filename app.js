const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/routes");


const app = express();



app.use(express.json());
app.use("/api/v", bookRoute);

mongoose.connect("mongodb+srv://rahul_vij6205:rahulvij22@cluster0.nqeb8l9.mongodb.net/beest1?retryWrites=true&w=majority").then(() => (console.log("database connected")));


app.listen(1000, () => {
    console.log("SERVER STARTED SUCCESSFULLY");
});