import { Router } from "express";
import shortid from "shortid";
import { Url } from "../../@types/Url";
import { validateUrl } from "../utils";

export const router = Router();

const baseUrl = 'http://localhost:3030'

const urls: Url[] = []

router.post('/urls', async (req, res) => {
  const { original_url } = req.body;
  const isValidUrl = validateUrl(original_url);

  if (!isValidUrl) {
    res.status(422).json({ error: "Invalid url" });
  }

  const hash = shortid.generate();

  const shortUrl = `${baseUrl}/${hash}`

  urls.push({ original_url, hash })

  res.status(200).json({ url: shortUrl })
})

export default router;