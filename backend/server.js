const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// --------- Routes ------------------

const userRouter = require("./routes/users.js");
app.use("/user", userRouter);

const bookingRouter = require("./routes/bookings.js");
app.use("/booking", bookingRouter);

const destinationRouter = require("./routes/destinations.js");
app.use("/destination", destinationRouter);

const travelmodeRouter = require("./routes/travelmodes.js");
app.use("/travelmode", travelmodeRouter);

// --------- Routes ------------------

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB Connection Success!");
});


app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT : ${PORT}`);
});
