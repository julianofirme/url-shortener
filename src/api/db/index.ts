import { Sequelize } from 'sequelize';
import 'dotenv/config'


const sequelize = new Sequelize(
  `${process.env.DATABASE_URL}`, {
  host: `${process.env.POSTGRES_HOST}`,
  dialect: 'postgres',
  port: Number(process.env.POSTGRES_PORT)
}
)

async function connection() {
  try {
    await sequelize.authenticate();
    console.log(`:::Connected to database -> ${process.env.POSTGRES_DB}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { connection, sequelize }