import User from "../../models/user_management/userModel.js";
import bcrypt from "bcryptjs";
import UserDto from "../../dtos/user_management/userResponse.js";
import formatPaginatedResult from "../../common/formatPaginatedResult.js";

const saltRounds = 10;

const createUser = async (userData) => {
  try {
    const user_name = userData?.user_name;

    const userNameExists = await User.findByUserName(user_name);

    if (userNameExists) {
      return { message: "Username đã tồn tại" };
    }

    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    const userWithHashedPassword = { ...userData, password: hashedPassword };

    const user = await User.create(userWithHashedPassword);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating user");
  }
};

const getAllUsers = async (req) => {
  try {
    const { pageSize, pageNumber } = req.params;

    const options = {
      page: pageNumber,
      limit: pageSize,
      populate: {
        path: "role",
        select: "role_name",
      },
    };

    const users = await User.paginate({}, options);

    return formatPaginatedResult(users, UserDto);
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching users");
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id).populate("role", "role_name");
    if (!user) {
      throw new Error("User not found");
    }
    const result = new UserDto(user);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching user by ID");
  }
};

const updateUser = async (id, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedUser) {
      throw new Error("User not found");
    }
    return updatedUser;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating user");
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error("User not found");
    }
    return { message: "User deleted successfully" };
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting user");
  }
};

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };
