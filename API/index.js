import express from 'express';
import bodyparser from 'body-parser';

app.use(bodyparser.json())


const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('testing');
});
app.listen(PORT, () => {
  console.log(`server runinig on port ${PORT}`) 
});

