import { Router } from "express";

const router = Router();

//GET orders: orders/
router.get("/", (req, res, next) => {
    res.send('Orders Test Message');
}   
);

router.get("/report", (req, res, next) => {
    res.send('Orders Report Message');
}   
);

export default router;