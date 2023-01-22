import { Router } from 'express';
import warrantyController from '../../controllers/warrantyController';
import isAuthenticated from '../../config/middleware/isAuthenticated';

const router = Router();


router.use(isAuthenticated);

router.route("/")
    .post(warrantyController.create);

router.route("/:id")
    .get(warrantyController.findAllByVehicle)
    .put(warrantyController.update)
    .delete(warrantyController.remove);

module.exports = router;