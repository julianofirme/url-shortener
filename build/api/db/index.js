"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.connection = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
const sequelize = new sequelize_1.Sequelize(`${process.env.POSTGRES_DB}`, `${process.env.POSTGRES_USER}`, `${process.env.POSTGRES_PASSWORD}`, {
    host: 'localhost',
    dialect: 'postgres',
    port: Number(process.env.POSTGRES_PORT)
});
exports.sequelize = sequelize;
async function connection() {
    try {
        await sequelize.authenticate();
        console.log(`:::Connected to database -> ${process.env.POSTGRES_DB}`);
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
exports.connection = connection;
