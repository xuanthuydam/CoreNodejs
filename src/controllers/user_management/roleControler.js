import Role from "../../models/user_management/roleModel.js";
import * as roleService from "../../services/user_management/roleService.js";

const getAllRole = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles(req);
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const roles = await roleService.getRoleById(id);
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await roleService.deleteRole(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRole = async (req, res) => {
  try {
    const result = await roleService.createRole(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedRole = await roleService.updateRole(id, updateData);
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createRole, updateRole, getAllRole, deleteRole, getRoleById };
