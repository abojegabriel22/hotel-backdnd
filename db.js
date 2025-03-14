const mongoose = require("mongoose")

const mongoUrl = "mongodb+srv://hotel-database:rap0nl5pt5j1XR8Z@cluster0.16ffmn9.mongodb.net/hotel-database?retryWrites=true&w=majority&appName=Cluster0"

const dbc = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        // console.log("Connected to MongoDB")
    }
    catch (error){
        // console.error("Error connecting mongodb", error.message)
        process.exit(1)
    }
}

module.exports = dbc

// mongodb+srv://hotel-database:2sC1bg7xlsG4GeWk@cluster0.16ffmn9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://hotel-database:rap0nl5pt5j1XR8Z@cluster0.16ffmn9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0