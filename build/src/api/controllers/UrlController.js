"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const express_1 = require("express");
const shortid_1 = __importDefault(require("shortid"));
const Url_1 = require("../models/Url");
const utils_1 = require("../utils");
require("dotenv/config");
const baseUrl = process.env.DOMAIN;
class UrlController {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
    }
    create = async (req, res) => {
        const { original_url } = req.body;
        const isValidUrl = (0, utils_1.validateUrl)(original_url);
        if (!isValidUrl) {
            res.status(422).json({ error: "Invalid url" });
        }
        const hash = shortid_1.default.generate();
        const shortUrl = `${baseUrl}/${hash}`;
        await Url_1.Url.create({ original_url, hash });
        res.status(200).json({ url: shortUrl });
    };
    getUrl = async (req, res) => {
        const hash = req.params.hash;
        if (!hash) {
            res.status(404).json({ error: "Not found url" });
        }
        const sqlResponse = await Url_1.Url.findOne({
            where: {
                hash
            }
        });
        const url = JSON.stringify(sqlResponse);
        if (!url) {
            res.status(404).json({ error: "Not found url" });
        }
        return res.redirect(JSON.parse(url).original_url);
    };
}
exports.UrlController = UrlController;
