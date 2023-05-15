
import Product from "../models/productsModel.js";

// Get all products
const getProducts = async (req, res, next) => {
  const products = Product.find({})
    .then((products) => {
      if (products.length > 0) {
        products.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA - dateB;
        });
      }
      //res.json(products);
      res.render("pages/products", { title: "Products", products: products });
    }) //get all products
    .catch((err) => {
      next(err);
    });
};

// Get a single product

//Object destructuring is a technique that allows you to extract properties 
// from an object and assign them to individual variables. 
// Using object destructuring can make your code more concise and readable
// So instead of : const getProductById = async (req, res, next) => {
// you can write: const getProductById = async ({ params: { id } }, res, next) => {
const getProductById = async ({ params: { id } }, res, next) => {
  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    }
    throw new Error(`Product with id ${id} not found`);
  } catch (err) {
    console.log(err.message);
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        return res.status(400).json({ message: "Invalid product ID" });
      }
      next(err);
  } finally {
    console.log("Finally Block executed");
  }
};

// Create a product
const createProduct = async (req, res, next) => {
    //get the product data from the request body
    const imgPath = req.file.path;
    const imgURL = req.file.path.substring(req.file.path.indexOf("/") + 1);
    const product = {
      //create a new product
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      imageUrl: imgURL //remove public from the path
    };
    //console.log(product);
    try {
      const newProduct = await Product.create(product);
      //res.status(201).json(newProduct);
      res.redirect("/products");
    } catch (err) {
      //if there is an error, send it to the error handler
      next(err);
    }
  };

// Update a product
const updateProduct = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

// Delete a product
const deleteProduct = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

// export all the controller functions
export { getProducts, getProductById, createProduct };
