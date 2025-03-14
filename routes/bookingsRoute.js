
const express = require("express")
const router = express.Router()
const Booking = require("../models/booking")
const Room = require("../models/room")

// router.post("/bookroom", async(req, res) => {
//     const {
//         room,
//         userid,
//         fromdate,
//         todate,
//         totalPrice,
//         totaldays
//     } = req.body

//     try{
//         const newbooking = new Booking({
//             room: room.name,
//             roomid: room._id,
//             userid,
//             fromdate,
//             todate,
//             totalPrice,
//             totaldays,
//             transactionId: "1234"
//         })

//         const booking = await newbooking.save()

//         const roomtemp = await Room.findOne({_id: room._id})

//         roomtemp.currentbookings.push({
//             bookingid: booking._id, 
//             fromdate: fromdate, todate: todate,
//             userid: userid,
//             status: booking.status
//         })
//         await roomtemp.save()
//         res.send("Room booked successfully")
//     }catch(error){
//         return res.status(400).json({error})
//     }
// })
router.post("/bookroom", async (req, res) => {
    const { room, userid, fromdate, todate, totalPrice, totaldays } = req.body;

    try {
        // Create new booking entry
        const newBooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate,
            todate,
            totalPrice,
            totaldays,
            transactionId: "1234"
        });

        const booking = await newBooking.save();

        // Update room's current bookings
        const roomTemp = await Room.findOne({ _id: room._id });

        roomTemp.currentbookings.push({
            bookingid: booking._id,
            fromdate,
            todate,
            userid,
            status: booking.status
        });

        await roomTemp.save();
        res.send("Room booked successfully");
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/getbookingsbyuserid", async (req, res) => {
    const userid = req.body.userid

    try{
        const bookings = await Booking.find({userid: userid})
        res.send(bookings)
    }catch(error){
        return res.status(400).json({error})
    }
})

router.post("/cancelbooking", async (req, res) => {
    const {bookingid, roomid} = req.body
    try{
        const bookingitem = await Booking.findOne({_id: bookingid})
        bookingitem.status = "cancelled"
        await bookingitem.save()
        const room = await Room.findOne({_id: roomid})

        const bookings = room.currentbookings

        const temp = bookings.filter(booking => booking.bookingid.toString()!==bookingid)
        room.currentbookings = temp

        await room.save()

        res.send("Your booking cenceled successfully")
    }catch(error){
        return res.status(400).json({error})
    }
})

router.get("/getallbookings", async (req, res) => {
    try{
        const bookings = await Booking.find({})
        return res.send(bookings)
    }
    catch(error){
        return res.status(400).json({message: error})
    }
})

module.exports = router