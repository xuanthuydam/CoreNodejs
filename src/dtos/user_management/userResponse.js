class UserDTO {
  constructor(user) {
    this._id = user._id;
    this.user_name = user.user_name;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.andress = user.andress;
    this.role = user.role ? user.role.role_name : null;
    this.role = user.role ? user.role.role_name : null;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}

export default UserDTO;
