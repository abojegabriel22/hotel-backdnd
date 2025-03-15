const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT
const dbConfig = require("./db")
const dbc = require("./db")
const roomsRoute = require("./routes/roomsRoute")
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')


dbc()
app.use(cors())
app.use(express.json())
app.use("/api/rooms", roomsRoute)
app.use("/api/users", usersRoute)
app.use("/api/bookings", bookingsRoute)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.listen(port, () => {
    // dbc
    // console.log(`Server is running on port ${port}`)
})
