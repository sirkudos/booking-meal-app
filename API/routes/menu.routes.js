import { Router } from 'express';
import menuController from '../controllers/menu.controller';


const router = Router();

router.get('/', menuController.fetchAllMeals);
router.post('/', menuController.addAMeal);
router.get('/:id', menuController.getSingleMeal);


export default router;
