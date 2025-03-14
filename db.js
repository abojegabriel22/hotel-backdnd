const mongoose = require("mongoose")

const mongoUrl = process.env.mongoUrl

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
