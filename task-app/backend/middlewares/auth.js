import Jwt from "jsonwebtoken";
import User from "../models/User.js";
const isVerified = async (req, res, next) => {
  //check that request object contains headre and autorization

  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.includes("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      const decode = Jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decode.id);
      //   console.log(user);
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({
        status: "failed",
        message: err.message,
      });
    }
  } else {
    res.status(401).json({
      status: "failed",
      message: "No token",
    });
  }
};

//authorization
const authorized = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        status: "failed",
        message: `User with ${req.user.role} role is not permitted to access this resource`,
      });
      return;
    }
    next();
  };
};

export { isVerified, authorized };
