import express, { Request, Response } from 'express';

const app: express.Application = express();
const port: string = process.env.PORT || '3001';
const address = `localhost:${port}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req: Request, res: Response) {
  res.send('Hello world!');
});

app.listen(port, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
