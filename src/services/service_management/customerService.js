import User from "../../models/user_management/userModel.js";
import bcrypt from "bcryptjs";
import UserDto from "../../dtos/user_management/userResponse.js";
import formatPaginatedResult from "../../common/formatPaginatedResult.js";
import Customer from "../../models/service_management/customerModel.js";
import CustomerDTO from "../../dtos/service_management/customerResponse.js";

const createCustomer = async (customerData) => {
  try {
    const customer = await Customer.create(customerData);
    return customer;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating user");
  }
};

const getAllCutomers = async (req) => {
  try {
    const { pageSize, pageNumber } = req.query;

    const options = {
      page: pageNumber,
      limit: pageSize,
    };

    const Customers = await Customer.paginate({}, options);

    return formatPaginatedResult(Customers, CustomerDTO);
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching users");
  }
};

const getCustomerById = async (id) => {
  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      throw new Error("Customer not found");
    }
    const result = new CustomerDTO(customer);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching user by ID");
  }
};

const updateCustomer = async (id, updateData) => {
  try {
    const customer = await Customer.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!customer) {
      throw new Error("Cutomer not found");
    }
    return customer;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating user");
  }
};

const deleteCustomer = async (id) => {
  try {
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      throw new Error("Customer not found");
    }
    return { message: "Customer deleted successfully" };
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting Customer");
  }
};

export {
  createCustomer,
  getAllCutomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
