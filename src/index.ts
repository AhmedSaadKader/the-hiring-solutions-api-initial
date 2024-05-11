import express, { Request, Response } from 'express';

const app: express.Application = express();
const address: string = process.env.PORT || '0.0.0.0:3000';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req: Request, res: Response) {
  res.send('Hello world!');
});

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
