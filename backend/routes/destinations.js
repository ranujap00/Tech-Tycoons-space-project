const router = require("express").Router();
let destination = require("../models/Destination");

// Add destination
router.route("/addDestination").post((req, res) => {
    const destinationName = req.body.destinationName;
    const description = req.body.description;
    const climate = req.body.climate;
    const culture = req.body.culture;
    const attractions = req.body.attractions;
    const destinationImage = req.body.destinationImage;
    
    //Transfer data using POST method
    const newDestination = new destination({
        destinationName,
        description,
        climate,
        culture,
        attractions,
        destinationImage
    })
    
    //condition - if successfully saved
    newDestination.save().then(() => {
        res.json("destination added");
    }).catch((err) => {
        console.log("error adding the destination");
        console.log(err);
        
    })
});


//Get destination
router.route("/getDestination").get((req, res) => {
    destination.find().then((destinations) => {
        res.json(destinations)
    }).catch((err) => {
        console.log(err);
    })
})

//Get destination by name
router.route("/getDestinationByName/:name").get((req, res) => {
    const destinationName = req.params.name;

    destination.findOne({ destinationName: destinationName }).then((destination) => {
        if (destination) {
            res.json(destination);
        } else {
            res.status(404).json({ message: "Destination not found" });
        }
    }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: "An error occurred while retrieving the destination" });
    });
});



//Get destination by objectId
router.route("/getDestinationById/:id").get((req, res) => {
    let id = req.params.id;

    destination.findById(id).then((destinationId) => {
        res.json(destinationId)
    }).catch((err) => {
        console.log(err);
    })
})


module.exports = router;