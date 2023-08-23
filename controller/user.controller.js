import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// ------------------------- LOGIN USER --------------------------------------------
export const login = async (req, res) => {
  try {
    // req body
    let { email, password } = req.body;

    // to lowerCase email
    email = email.toLowerCase();

    // find if user exists
    let user = await User.findOne({
      email: email,
    });

    // if user doesn't exists
    if (!user) {
      res.json({
        success: false,
        message: "Email not registered",
      });
      return;
    }

    // match passwords
    let userPass = user.password;
    let match = bcrypt.compareSync(password, userPass);

    if (!match) {
      res.json({
        success: false,
        message: "Incorrect password",
      });
      return;
    }

    // login success
    const payload = {
      email: user.email,
      _id: user._id,
    };
    let token = jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: 7 * 24 * 60 * 60, // 7 days
    });

    res.json({
      success: true,
      message: "Login Successfully",
      user: user,
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Internal server error", error: err });
  }
};

// -------------- REGISTER USER --------------------------------------------
export const signup = async (req, res) => {
  try {
    // req body
    // console.log(req.body);
    let { fullName, email, college, about, password } = req.body;
    
    // hashing password using bcrypt
    password = bcrypt.hashSync(password, 10);

    // to lower case - so that 'sahillede940@gmail.com' and 'SAhillede940@gmail.com' are treated same not different
    email = email.toLowerCase();

    // create the user
    const newUser = await User.create({
      fullName: fullName,
      email: email,
      password: password,
      college: college,
      about: about,
    });

    // jwt token for the user
    const payload = {
      email: newUser.email,
      _id: newUser._id,
    };

    let jwtToken = jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: 7 * 24 * 60 * 60, // for 7 days
    });

    // response
    res.status(200).json({
      success: true,
      message: "User Created successfully",
      user: newUser,
      token: jwtToken,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Internal server error", error: err });
  }
};

export const getById = async (req, res) => {
  try {
    let id = req.params["id"];

    let user = await User.findById(id);

    res.json({
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(err);
    res.json({ success: false, message: "Internal server error", error: err });
  }
};
