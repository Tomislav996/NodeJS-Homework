import { Router } from "express";

import productRouter from "../routes/products.routes.js";
import orderRouter from "../routes/orders.routes.js";
import customerRouter from "../routes/customers.routes.js";

const router = Router();

router.get('/', (req, res) => {
    res.send("Server is live.")
});

router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use(`/customers`, customerRouter);

export default router;
