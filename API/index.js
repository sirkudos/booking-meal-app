import express from 'express';
import bodyparser from 'body-parser';
import mealRoutes from './routes/meal.routes';


const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('testing');

  app.use('/api/v1/meals', mealRoutes);
});
app.listen(PORT, () => {
  console.log(`server runinig on port ${PORT}`);
});
