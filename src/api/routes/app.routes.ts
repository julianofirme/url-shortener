import { Router } from "express";
import { validateUrl } from "../utils";

export const router = Router();

router.post('/urls', async (req, res) => {
  const { original_url } = req.body;
  const isValidUrl = validateUrl(original_url);

  if (!isValidUrl) {
    res.status(422).json({ err: "Invalid url" });
  }

  res.sendStatus(200);
})

router.get('/urls/:hash', async (req, res) => {
  const hash = req.params.hash;
  console.log(hash);
})


export default router;