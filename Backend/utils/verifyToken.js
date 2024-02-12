const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/error.js");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return errorHandler(res, "You are not authenticate", 403);

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return errorHandler(res, "Invalid token", 403);
    req.user = user;
    next();
  });
};

const verifyUser = (req, res) => {
  verifyToken(req, res, next, (req, res) => {
    if (req.params.id === req.user.id || req.user.isAdmin) {
      next();
    } else {
      errorHandler(res, "You are not authorized", 403);
    }
  });
};

const verifyAdmin = (req, res) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      errorHandler(
        res,
        "Hello Admin you are logged in and you can delete ",
        403
      );
    }
  });
};
module.exports = { verifyToken, verifyUser, verifyAdmin };
