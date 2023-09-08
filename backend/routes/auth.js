const express = require("express"); // importing express
const router = express.Router();

const User = require("../models/User"); //importing user schema
const { body, validationResult } = require("express-validator"); //importing express-validator module
const bcrypt = require("bcryptjs"); // importing bcryptjs module for preventing rainbow table attacks
const jwt = require("jsonwebtoken"); // importing jwt
const JWT_Secret = "shivram2002"; //key for JWT
const fetchuser = require("../middleware/fetchuser"); //importing fetchuser file
//Route 1:no login required . Post request for user.
router.post(
  "/createuser",
  [
    body("name", "Enter a Valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be more than 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // console.log(req.body)
    // const users = User(req.body)
    // // console.log(users)
    // users.save()
    let sucess = false; //for verifying in the front end
    //If there are error we get in login show the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ sucess, errors: errors.array() });
    }
    try {
      //check whether user with same mail exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        //error if user exists
        return res.status(400).json({ sucess, error: "Sorry user exists " });
      }

      const salt = await bcrypt.genSalt(10); // using salt
      const secPass = await bcrypt.hash(req.body.password, salt); // hashing password with salt.
      //creating user in mongo

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      // extra handlers used before
      //   .then(user => res.json(user))
      //   .catch(err=> {console.log("An error occured" + err)
      // res.json({error:"Please enter unique email"})})
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_Secret);
      sucess = true; // setting the jwt token with secret key for security
      res.json({ sucess, authtoken });
    } catch (error) {
      //For catching extra errors if any (internal server error)
      console.log(error);
      res.status(500).send("Internal server error");
    }
  }
);

//Route 2 :Authenticate user with mail and password /login
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be empty").exists(),
  ],
  async (req, res) => {
    let sucess = false;
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      //if user not in the db
      if (!user) {
        sucess = false;
        return res
          .status(400)
          .send({ sucess, error: "Please enter correct crendential" });
      }
      const passComp = await bcrypt.compare(password, user.password); //comparing entered password with existing one.
      //if password not matched
      if (!passComp) {
        sucess = false;
        return res
          .status(400)
          .send({ sucess, error: "Please enter correct crendential" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_Secret); // setting the jwt token with secret key for security
      sucess = true;
      res.json({ sucess, authtoken }); //send token
      // console.log(authtoken)
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  }
);

//Route 3 : Get all users details /getuser login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    uesrId = req.user.id;
    //find user in db with user-id
    const user = await User.findById(uesrId).select("-password");
    //send user response
    res.send(user);
  } catch (error) {
    console.log(error);
    //any error
    res.status(500).send("Internal server error");
  }
});
//export module
module.exports = router;
