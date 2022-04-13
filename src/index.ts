import express, { Application, Request, Response } from 'express'

const app: Application = express();
const PORT = process.env.PORT || 3030;

app.get('/urls', (req: Request, res: Response) => {
  res.send('Hello')
})

app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}!`)
})