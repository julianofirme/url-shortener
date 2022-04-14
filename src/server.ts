import express, { Application } from 'express'

const app: Application = express();

const PORT = process.env.PORT || 3030;

const server = app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`)
})

process.on("SIGNINT", () => {
  server.close();
  console.log("App finished");
});