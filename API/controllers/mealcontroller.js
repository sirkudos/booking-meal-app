import MealService from '../services/meal.service';


const mealController = {

    fetchAllMeals(req, res) {
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200)

    },

    addAMeal(req, res){
        /*
        {
            name: 'some food'
            size:   'large'
            price:   '200'
        }
        
        */ 
       const newMeal = req.body;
      const createdMeasl =  MealService.addMeal(newMeal);
     return  res.json({
        status: 'success',
        data: createdMeasl
          
      }).status(201)

    },

    getSingleMeal(req, res){
        const id = req.params.id;
        const foundMeal = MealService.getMeal(id);
        return res.json({
            status: 'success',
            data: foundMeal,
                 
        }).satus(201)
    }



}


export default mealController;