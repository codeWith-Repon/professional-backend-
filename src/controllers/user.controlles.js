import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  //validation - not empty
  // check if user already exists: username, email
  // check for images, check for avater
  // upload them to cloudinary, avatar
  //crate user object - create entry in db
  // remove password and refresh token field form response
  //check for user creation
  //return res

  const { fullName, email, username, password } = req.body;
  console.log("email", email);

  // nob way
  if(fullName === ""){
    throw new ApiError(400, "fullname is required");
  }
  else if(email === "") {
    throw new ApiError("400", "emal is rwquired");
  }.......

});

export { registerUser };
