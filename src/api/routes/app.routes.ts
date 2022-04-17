import { Router } from "express";
import { UrlController } from "../controllers/UrlController";


export const router = Router();

const urlController = new UrlController()

router.post('/urls', urlController.create)

router.get('/:hash', urlController.getUrl);

export default router;