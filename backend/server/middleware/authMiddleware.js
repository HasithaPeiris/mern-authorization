import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
  try {
    let token;

    token = req.cookies.jwt;

    if (token) {
      try {
        // Create a decoded user object from the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Assign the decoded user to current user
        req.user = await User.findById(decoded.userId).select("-password");

        next();
      } catch (error) {
        res.status(401);
        throw new Error("Invalid Token");
      }
    } else {
      res.status(401);
      throw new Error("Not authorized, No Token");
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// Validate register using joi
const validateRegister = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

// Validate login using joi
const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

export { protect, validateRegister, validateLogin };
