const router = require("express").Router();
let user = require("../models/User");

// Add user
router.route("/addUser").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //Transfer data using POST method
  const newUser = new user({
    username,
    password,
  });

  //condition - if successfully saved
  newUser
    .save()
    .then(() => {
      res.json("user added");
    })
    .catch((err) => {
      console.log("error adding the user");
      console.log(err);
    });
});

//Get user
router.route("/getUser").get((req, res) => {
  user
    .find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Get user by objectId
router.route("/getUserById/:id").get((req, res) => {
  let id = req.params.id;

  user
    .findById(id)
    .then((userId) => {
      res.json(userId);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Authenticate user by username and password
router.route("/authenticateUser").post((req, res) => {
  const { username, password } = req.body;

  user.findOne({ username: username })
    .then((user) => {
      if (user && user.password === password) {
        console.log("Authentication successfull");
        res.send(user._id);
      } else {
        console.log("authentication failed");
        res.send("");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    });
});

module.exports = router;
