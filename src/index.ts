
import express from 'express';
import routes from './routes';
import connectDB from './util/db'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', routes);

connectDB()

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
