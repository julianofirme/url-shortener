"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_routes_1 = __importDefault(require("./api/routes/app.routes"));
require("dotenv/config");
const db_1 = require("./api/db");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3030;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
(0, db_1.connection)();
app.use("/", app_routes_1.default);
app.listen(PORT, () => {
    console.log(`:::App is listening on port ${PORT}!`);
});
