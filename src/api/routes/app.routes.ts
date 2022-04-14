import { Router } from "express";

export const router = Router();

router.post('/urls', async (req, res) => {
  const { origUrl } = req.body;
  console.log("🚀 ~ origUrl", origUrl)
})

router.get('/urls/:hash', async (req, res) => {
  const url = req.params.hash;
  console.log("🚀 ~ url", url)
})


export default router;