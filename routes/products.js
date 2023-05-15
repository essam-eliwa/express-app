import { Router } from "express";
import multer from "multer";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/productsController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.split('.')[0] + '-' + Date.now() + '.' + file.mimetype.split("/")[1]) //Appending file extension
  }
})

const upload = multer({ storage: storage });

//const upload = multer({ dest: 'public/images/uploads/' });

const router = Router();

// GET products: products/
router.get("/", getProducts);

// GET a single product: products/:id
router.get("/find/:id", getProductById);


// GET add product form
router.get("/add", (req, res, next) => {
  res.render("pages/add-product", { title: "Add Product" });
});
// POST a single product: products/
router.post("/add", upload.single('image'), createProduct);


// Patch a single product: products/:id
// When a client needs to replace an existing Resource entirely,
// they can use PUT. When they're doing a partial update, they can use HTTP PATCH
router.patch("/:id", (req, res, next) => {
  res.json({ message: "update a product" });
});

// DELETE a single product: products/:id
router.delete("/:id", (req, res, next) => {
  res.json({ message: "delete a product" });
});

export default router;
