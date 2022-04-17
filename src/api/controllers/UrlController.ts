import { Request, Response, Router } from "express";
import shortid from "shortid";
import { Url } from "../models/Url";
import { validateUrl } from "../utils";

const baseUrl = 'http://localhost:3030'

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
      }
    
      const hash = shortid.generate();
      const shortUrl = `${baseUrl}/${hash}`
    
      const response = await Url.create({ original_url, hash })
      console.log("🚀 ~ response", response)
    
      res.status(200).json({ url: shortUrl })
    }

    getUrl = async (req: Request, res: Response) => {
      try {
        const hash = req.params.hash
    
        if (!hash) {
          res.status(404).json({ error: "Not found url" });
        }
        
        const url = await Url.findOne({
          where: {
            hash
          }
        })
        
        if (!url) {
          res.status(404).json({ error: "Not found url" });
        }
        
        console.log("🚀 ~ url", url)

        // return res.redirect();
      } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
      }
    }
}