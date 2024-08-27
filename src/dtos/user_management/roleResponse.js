class RoleDTO {
  constructor(role) {
    this._id = role._id;
    this.role_name = role.role_name;
    this.description = role.description;
  }
}

export default RoleDTO;
