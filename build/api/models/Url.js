"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.Url = db_1.sequelize.define('Url', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    original_url: {
        type: sequelize_1.DataTypes.STRING
    },
    hash: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
// Other model options go here
});
