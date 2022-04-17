import { DataTypes } from "sequelize/types";
import { sequelize } from "../db";

export const Url = sequelize.define('Url', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  original_url: {
    type: DataTypes.STRING
  },
  hash: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});