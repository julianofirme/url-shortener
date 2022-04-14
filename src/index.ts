import express, { Application } from 'express'
import router from './api/routes/app.routes';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router)
