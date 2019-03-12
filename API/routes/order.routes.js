import { Router } from 'express';
import orderController from '../controllers/order.controller';


const router = Router();

router.get('/', orderController.fetchAllMeals);
router.post('/', orderController.addAMeal);
router.get('/:id', orderController.getSingleMeal);


export default router;
