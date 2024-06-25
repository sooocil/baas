const jwt = require("jsonwebtoken");
const JWT_SECRET = '9HCl6jJ6qiArrnnoy9uS3pRbtTR5mMyG0uDIO0g4Ero'; // Make sure this is the same secret used to sign the token

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
