import { Request, Response, Router } from "express";
import shortid from "shortid";
import { Url } from "../models/Url";
import { validateUrl } from "../utils";
import 'dotenv/config'

const baseUrl = process.env.DOMAIN

export class UrlController {
  public router: Router;

  constructor() {
    this.router = Router()
  }

  create = async (req: Request, res: Response) => {
    const { original_url } = req.body;
    const isValidUrl = validateUrl(original_url);

    if (!isValidUrl) {
      res.status(422).json({ error: "Invalid url" });
      return;
    }
    
    const hash = shortid.generate();
    const shortUrl = `${baseUrl}/${hash}`
    
    await Url.create({ original_url, hash })
    
    res.status(200).json({ url: shortUrl })
  }
  
  getUrl = async (req: Request, res: Response) => {
    const hash = req.params.hash
    
    if (!hash) {
      res.status(404).json({ error: "Not found url" });
      return;
    }
    
    const sqlResponse = await Url.findOne({
      where: {
        hash
      }
    })
    
    const url = JSON.stringify(sqlResponse)
    
    if (url === '') {
      res.status(404).json({ error: "Not found url" });
      return;
    }

    return res.redirect(JSON.parse(url).original_url);
  }
}