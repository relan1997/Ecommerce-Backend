//user ki service banayenge jisska use karke hum controller banayenge, jiska use karke hum routes banayenge
import { JsonWebTokenError } from "jsonwebtoken";
import User from "../src/models/userModel";
import bcrypt from "bcryptjs";
import { getUserIdFromToken } from "../config/jwtProvider";
const createUser = async (userData) => {
  //userData is bascially the object that the frontend passes
  try {
    let { firstName, lastName, email, password } = userData;

    const isUserExist = await User.findOne({ email }); //check if a user with the current email already exists in the database already or not

    if (isUserExist) {
      throw new Error("user already exists with current email", email);
    }
    password = await bcrypt.hash(password, 8); //used for hashing the password
    const user = await User.create({ firstName, lastName, email, password });
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findUserById = async (userId) => {
  //if we enter the userId toh yeh woh user ko search karke dega
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) throw new Error("user not found with id:", userId);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findUserByEmail = async (email) => {
  //if we enter the userId toh yeh woh user ko search karke dega
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("user not found with email:", email);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserProfileByToken = async (token) => {
  // agar token pass hoga toh user return karega
  try {
    const userId = getUserIdFromToken(token);

    const user = await findUserById(userId);
    if (!user) {
      throw new Error("user not found with id:", userId);
    }
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};

export {
  createUser,
  findUserByEmail,
  findUserById,
  getUserProfileByToken,
  getAllUsers,
};
