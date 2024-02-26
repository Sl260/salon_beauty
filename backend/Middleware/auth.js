require("dotenv").config({ path: "../.env" });
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  if (
    req.headers?.authorization === undefined ||
    req.headers?.authorization === null
  ) {
    res.status(401).json({
      message: "Unauthorized, token does not exist",
    });
  }

  // Format for a token submitted is the following: "Authorization: Bearer <JWT_TOKEN>"
  let token = req.headers?.authorization?.split(" ")[1]; // Split on space and select second element

  console.log("token", token);
  if (token === "") {
    res.status(401).json({
      message: "Token does not exist",
    });
  } else {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, result) => {
      if (err) {
        res.status(400).json({
          message: "Cannot verify JWT token. " + err,
        });
      } else if (result) {
        // If only the token exists AND is verified, move to the next piece of middleware with req object
        // JWT decoded, add User email to req object and pass it on to the next function
        let newReqBody = req.body;
        newReqBody.user = result.email;
        req.body = JSON.stringify(newReqBody);
        next();
      } else {
        res.status(401).json({
          message: "Token is invalid or expired",
        });
      }
    });
  }
};
