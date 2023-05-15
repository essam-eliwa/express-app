import { Router } from "express";
import Product from "../models/productsModel.js";

const router = Router();

//GET products: products/
router.get("/", (req, res, next) => {
  const products = Product.find({})
    .then((products) => {
      res.json(products);
    }) //get all products
    .catch((err) => {
      next(err);
    });
  //res.json({ message: "get all products" });
});

//GET a single product: products/:id
router.get("/:id", async (req, res, next) => {
  let id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (err) {
    console.log(err.message);
    next(err);
  } finally {
    console.log("Finally Block");
  }

  // res.json({ message: `get product by id:  ${id}` });
});

//POST a single product: products/
router.post("/", async (req, res, next) => {
  const product = {
    //create a new product
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  };
  try {
    const newProduct = await Product.create(product);
    res.status(201).json(newProduct);
  } catch (err) {
    //if there is an error, send it to the error handler
    next(err);
  }
  //res.json({ message: "create a new product" });
});

//Patch a single product: products/:id
// When a client needs to replace an existing Resource entirely,
// they can use PUT. When they're doing a partial update, they can use HTTP PATCH
router.patch("/:id", (req, res, next) => {
  res.json({ message: "update a product" });
});

//DELETE a single product: products/:id
router.delete("/:id", (req, res, next) => {
  res.json({ message: "delete a product" });
});

export default router;
