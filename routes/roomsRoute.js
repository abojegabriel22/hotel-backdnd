const express = require("express")
const router = express.Router()

const Room = require("../models/room")

// router.get("/getallrooms", async (req, res) => {
//     try{
//         const rooms = await Room.find({})
//         return res.send(rooms)
//     }
//     catch(error){
//         return res.status(400).json({message: error})
//     }
// })

// Get all rooms, filtered by availability
router.get("/getallrooms", async (req, res) => { 
    try {
        const rooms = await Room.find({});
        res.json(rooms);
    } catch (error) {
        // console.error("Error fetching rooms:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

router.post("/getroombyid", async (req, res) => {
    const roomId = req.body.roomId
    try{
        const room = await Room.findOne({_id: roomId})
        return res.send(room)
    }
    catch(error){
        return res.status(400).json({message: error})
    }
})

router.post("/addroom", async (req, res) => {
    try {
      const newroom = new Room(req.body);
      await newroom.save();
      res.status(201).json({ message: "New room added successfully! ", room: newroom});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

module.exports = router