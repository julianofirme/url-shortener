import express, { Application } from 'express'
import router from './api/routes/app.routes';

const app: Application = express();
const PORT = process.env.PORT || 3030;
 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`:::App is listening on port ${PORT}!`)
})

