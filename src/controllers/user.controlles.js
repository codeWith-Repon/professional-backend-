import { asyncHandler } from "../utils/asyncHandler.js";

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
});

export { registerUser };
