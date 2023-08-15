const router = require("express").Router();
let travelmode = require("../models/Travelmode");

// Add travelmode
router.route("/addDestination").post((req, res) => {
    const travelmodeName = req.body.travelmodeName;
    const travelmodeDescription = req.body.travelmodeDescription;
    
    //Transfer data using POST method
    const newTravelmode = new travelmode({
        travelmodeName,
        travelmodeDescription
    })
    
    //condition - if successfully saved
    newTravelmode.save().then(() => {
        res.json("travelmode added");
    }).catch((err) => {
        console.log("error adding the travelmode");
        console.log(err);
        
    })
});


//Get travelmode
router.route("/getTravelmode").get((req, res) => {
    travelmode.find().then((travelmodes) => {
        res.json(travelmodes)
    }).catch((err) => {
        console.log(err);
    })
})


//Get travelmode by objectId
router.route("/getTravelmodeById/:id").get((req, res) => {
    let id = req.params.id;

    travelmode.findById(id).then((travelmodeId) => {
        res.json(travelmodeId)
    }).catch((err) => {
        console.log(err);
    })
})


module.exports = router;