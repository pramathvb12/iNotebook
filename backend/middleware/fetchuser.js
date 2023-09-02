const jwt = require("jsonwebtoken"); // importing jwt
const JWT_Secret = "shivram2002"; //key for JWT
const fetchuser = (req, res, next) => {
  //get user from jwt token and update req body
  const token = req.header("auth-token");
  //If user token not matched then return following
  if (!token) {
    res.status(401).send({ error: "Access Denied Please use valid token" });
  }
  try {
    //verify with secrete key used by us
    const data = jwt.verify(token, JWT_Secret);
    req.user = data.user;
    //goto next function
    next();
  } catch (error) {
    //any error handle it
    res.status(401).send({ error: "Access Denied Please use valid token" });
  }
};
//exporting module
module.exports = fetchuser;
