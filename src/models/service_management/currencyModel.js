import { Schema, model } from "mongoose";

const currencySchema = new Schema(
  {
    code: { type: String, required: true }, //USD, EUR, VND
    name: { type: String, required: true }, //United States Dollar, Euro, Vietnam Dong
    symbol: { type: String, required: true }, //$, €, ₫
    exchange_rate: { type: Types.Decimal128, required: true }, //Tỷ giá hối đoái so với một đơn vị tiền tệ cơ sở
    decimal_places: { type: Number, required: true }, //Số chữ số thập phân được sử dụng bởi tiền tệ này (ví dụ: 2 đối với USD, 0 đối với JPY)
  },
  { timestamps: true }
);

const Currency = model("Currency", currencySchema);

export default Currency;
