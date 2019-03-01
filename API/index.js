import express from 'express';


const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('testing');
});
app.listen(PORT, () => {
  console.log(`server runinig on port ${PORT}`) 
});

