import { Router } from 'express';
const router = Router();
import userRoutes from './users'
import vehicleRoutes from './vehicles'
import warrantyRoutes from './warranty'


// user routes
router.use("/user", userRoutes);

//vehicle routes
router.use("/vehicle", vehicleRoutes);

// warranty routes
router.use("/warranty", warrantyRoutes);

module.exports = router;