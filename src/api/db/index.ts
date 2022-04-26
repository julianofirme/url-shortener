import { Sequelize } from 'sequelize';
import 'dotenv/config'

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`

const isProduction = process.env.NODE_ENV === "production"

const sequelize = new Sequelize(
  isProduction ?
    `${process.env.DATABASE_URL}` :
    connectionString,
  {
    ssl: isProduction
  }
);

async function connection() {
  try {
    await sequelize.authenticate();
    console.log(`::Connected to database`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { connection, sequelize }