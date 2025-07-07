
import express from 'express';
import routes from './routes';
import connectDB from './util/db';
import seedDB from './util/seed';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', routes);

const startServer = async () => {
  await connectDB();
  await seedDB();

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();
