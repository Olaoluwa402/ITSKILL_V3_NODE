import User from "../models/User.js";
import Joi from "joi";
import { generateToken } from "../utils/jwt.js";
//@register: '/api/v1/register' register user
//@ethod: POST
//@access: Public
export const register = async (req, res) => {
  const { name, email, password, repeat_password } = req.body;

  console.log(name, email, password, "password");

  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    repeat_password: Joi.ref("password"),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  }).with("password", "repeat_password");

  try {
    //validate form fields
    const value = await schema.validateAsync({
      email: email,
      password: password,
      name: name,
      repeat_password: repeat_password,
    });

    const userExist = await User.findOne({ email: email });
    console.log(userExist, "exist");

    //check if user exists
    if (userExist) {
      throw new Error("User with the email already registered");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    //send otp to mail - otpGenerator npm - strictly 6digit numbers
    //transactional mail services - check out mailGun and sendGrid
    // await axios.post()
    //create another endpoint to verify otp
    /* -verify endpoint 
          fint the otp =>const user = await  User.findOne({token:otp})
          update the user record, set the isVerified to true => user.isVerified = true ; user.save()
          send back the user detail and access_token
       */

    //sed a message to the user

    res.status(201).json({
      status: "success",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      access_token: generateToken(user._id),
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //find the user with the email
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User not found");
    }
    console.log(await user.matchPassword(password));
    const isPasswordMatched = await user.matchPassword(password);
    if (!isPasswordMatched) {
      throw new Error("Credential not correct");
    }
    //verify the supplied password against the database password
    res.status(200).json({
      status: "success",
      message: "login",
      access_token: generateToken(user._id),
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err.message,
    });
  }
};
