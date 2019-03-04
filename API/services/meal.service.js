/* eslint-disable no-shadow */
import dummyData from '../utils/dummyData';
import Meal from '../models/meal.models';

const MealService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return validMeals;
  },


  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meal[mealLength - 1].id;
    const newId = lastId + 1;
    // eslint-disable-next-line no-param-reassign
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },

  getMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id === id);
    return meal || {};
  },


};

export default MealService;
