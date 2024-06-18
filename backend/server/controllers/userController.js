import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import {
  validateRegister,
  validateLogin,
} from "../middleware/authMiddleware.js";

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = async (req, res) => {
  try {
    // Validate user data
    const { error } = validateLogin(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.status(200).json(user);
    } else {
      res.status(401);
      throw new Error("Invalid email or password!");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Register user
// route POST /api/users
// @access Public
const registerUser = async (req, res) => {
  try {
    // Validate user data
    const { error } = validateRegister(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // Check existing users
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Create a new user
    const newUser = await User.create({ name, email, password });

    // Generate JWT
    generateToken(res, newUser._id);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Logout user
// route POST /api/users
// @access Private
const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: "User logged out" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get user profile
// route GET /api/users/id
// @access Private
const getUserProfile = async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
};

// @desc Update user profile
// route PUT /api/users/id
// @access Private
const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    } else {
      res.status(404);
      throw new Error("User not found!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
