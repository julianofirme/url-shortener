import express, { Application } from 'express'
import router from './api/routes/app.routes';
import cors from 'cors';
import 'dotenv/config'
import { connection } from './api/db';

const app: Application = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'https://url-shortener-mu-topaz.vercel.app',
}));

connection()

app.use("/", router)

app.listen(PORT, () => {
  console.log(`:::App is listening on port ${PORT}!`)
})

