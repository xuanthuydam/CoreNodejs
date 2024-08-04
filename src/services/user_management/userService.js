import User from "../../models/user_management/userModel.js";
import bcrypt from "bcryptjs";
import UserDto from "../../dtos/user_management/userResponse.js";

const saltRounds = 10;

const createUser = async (userData) => {
  const user_name = userData?.user_name;

  const userNameExists = await User.findByUserName(user_name);

  if (userNameExists) {
    return { message: "Username đã tồn tại" };
  }

  const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
  const userWithHashedPassword = { ...userData, password: hashedPassword };

  const user = await User.create(userWithHashedPassword);
  return user;
};

const getAllUsers = async () => {
  const users = await User.find({}).populate("role", "role_name");
  const result = users.map((user) => new UserDto(user));
  return result;
};

const getUserById = async (id) => {
  const user = await User.findById(id).populate("role", "role_name");
  if (!user) {
    throw new Error("User not found");
  }
  const result = new UserDto(user);
  return result;
};

const updateUser = async (id, updateData) => {
  const updatedUser = await User.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    throw new Error("User not found");
  }
  return { message: "User deleted successfully" };
};

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };
