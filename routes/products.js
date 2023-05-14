import { Router } from "express";

const router = Router();

//GET products: products/
router.get("/", (req, res, next) => {
    res.json({ message: "get all products" });
});

//GET a single product: products/:id
router.get("/:id", (req, res, next) => {
    res.json({ message: "get product by id" });
});

//POST a single product: products/
router.post("/", (req, res, next) => {
    res.json({ message: "create a new product" });
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
