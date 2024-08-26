class CustomerDTO {
  constructor(customer) {
    this._id = customer._id;
    this.code = customer.code;
    this.name = customer.name;
    this.description = customer.description;
  }
}

export default CustomerDTO;
