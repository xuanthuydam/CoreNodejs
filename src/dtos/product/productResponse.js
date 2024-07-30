class ProductDTO {
  constructor(product) {
    this._id = product._id;
    this.name = product.name;
    this.quantity = product.quantity;
    this.price = product.price;
    this.total = product.total;
    this.product_category = product.product_category
      ? product.product_category.name
      : null;
    this.createdAt = product.createdAt;
    this.updatedAt = product.updatedAt;
  }
}

export default ProductDTO;
