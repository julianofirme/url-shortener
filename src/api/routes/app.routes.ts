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

router.get('/:hash', async (req, res) => {
  try {
    const hash = req.params.hash

    if (!hash) {
      res.status(404).json({ error: "Not found url" });
    }
    
    const url = urls.filter(url => url.hash == hash)[0]

    return res.redirect(url.original_url);
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

export default router;