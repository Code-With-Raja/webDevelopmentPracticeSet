require("dotenv").config();
const express= require("express");
const cors = require ("cors");
const mongoose = require("mongoose");

const app = express()
app.use(express.json())
app.use(cors())

const mongoURI = process.env.MONGO_URI || "mongodb+srv://prabhatkumardas1992:IXls3SphseRr21OK@wbregistration.mvpt7.mongodb.net/?retryWrites=true&w=majority&appName=WbRegistration"

mongoose.connect(mongoURI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));



const FormSchema = new mongoose.Schema({
    username: String,
    password: String

});

const FormModel = mongoose.model("Form", FormSchema);



app.post("/form", async (req, res) => {
    try {
      const newEntry = new FormModel(req.body);
      await newEntry.save();
      res.status(201).json({ message: "Saved successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
app.listen(5000)
