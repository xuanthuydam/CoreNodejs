import User from "../../models/user_management/userModel.js";
import bcrypt from "bcryptjs";
import UserDto from "../../dtos/user_management/userResponse.js";
import formatPaginatedResult from "../../common/formatPaginatedResult.js";
import Role from "../../models/user_management/roleModel.js";
import RoleDTO from "../../dtos/user_management/roleResponse.js";

const createRole = async (roleData) => {
  try {
    // const role_name = roleData?.role_name;

    // const userNameExists = await Role.findByUserName(user_name);

    const role = await Role.create(roleData);
    return role;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating user");
  }
};

const getAllRoles = async (req) => {
  try {
    const { pageSize, pageNumber } = req.query;

    const options = {
      page: pageNumber,
      limit: pageSize,
    };

    const roles = await Role.paginate({}, options);

    return formatPaginatedResult(roles, RoleDTO);
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching users");
  }
};

const getRoleById = async (id) => {
  try {
    const role = await Role.findById(id);
    if (!role) {
      throw new Error("Role not found");
    }
    const result = new RoleDTO(role);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching user by ID");
  }
};

const updateRole = async (id, updateData) => {
  try {
    const updatedRole = await Role.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedRole) {
      throw new Error("Role not found");
    }
    return updatedRole;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating user");
  }
};

const deleteRole = async (id) => {
  try {
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      throw new Error("Role not found");
    }
    return { message: "Role deleted successfully" };
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting user");
  }
};

export { createRole, updateRole, getAllRoles, getRoleById, deleteRole };
