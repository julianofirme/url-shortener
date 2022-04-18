"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.connection = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
let sequelize = new sequelize_1.Sequelize(`${process.env.POSTGRES_DB}`, `${process.env.POSTGRES_USER}`, `${process.env.POSTGRES_PASSWORD}`, {
    host: `${process.env.POSTGRES_HOST}`,
    dialect: 'postgres',
    port: Number(process.env.POSTGRES_PORT)
});
exports.sequelize = sequelize;
if (process.env.NODE_ENV === "production") {
    exports.sequelize = sequelize = new sequelize_1.Sequelize(`${process.env.DATABASE_URL}`);
}
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
