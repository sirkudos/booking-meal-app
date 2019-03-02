import dummyData from '../utils/dummyData';

const MealService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = {};
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
