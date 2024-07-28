import express, { json, urlencoded } from "express";
import { connect } from "mongoose";
import productRoues from "./src/routes/product.route.js";

const app = express();

//middleware
app.use(json()); // Get input equal json
app.use(urlencoded({ extended: false })); // Get input form

//routes
app.use("/api/products", productRoues);

connect(
  "mongodb+srv://DBTest:xlfv4cllm47qSdlL@cluster0.jmmidhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });
