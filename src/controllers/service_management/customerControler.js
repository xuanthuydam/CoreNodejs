import * as userService from "../../services/user_management/userService.js";
import * as customerService from "../../services/service_management/customerService.js";

const createCustomer = async (req, res) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCustomes = async (req, res) => {
  try {
    const customers = await customerService.getAllCutomers(req);
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await customerService.getCustomerById(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedCustomer = await customerService.updateCustomer(
      id,
      updateData
    );
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await customerService.deleteCustomer(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllCustomes,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
