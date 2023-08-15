const router = require("express").Router();
let booking = require("../models/Booking");

// Add booking
router.route("/addBooking").post((req, res) => {
    const userId = req.body.userId;
    const fullName = req.body.fullName;
    const email = req.body.email;
    const country = req.body.country;
    const DOB = req.body.DOB;
    const noOfSeats = Number(req.body.noOfSeats);
    
    //Transfer data using POST method
    const newBooking = new booking({
        userId,
        fullName,
        email,
        country,
        DOB,
        noOfSeats
    })
    
    //condition - if successfully saved
    newBooking.save().then(() => {
        res.json("booking added");
    }).catch((err) => {
        console.log("error adding the booking");
        console.log(err);
        
    })
});


//Get booking
router.route("/getBooking").get((req, res) => {
    booking.find().then((bookings) => {
        res.json(bookings)
    }).catch((err) => {
        console.log(err);
    })
})


//Get booking by objectId
router.route("/getBookingById/:id").get((req, res) => {
    let id = req.params.id;

    booking.findById(id).then((bookingId) => {
        res.json(bookingId)
    }).catch((err) => {
        console.log(err);
    })
})


module.exports = router;