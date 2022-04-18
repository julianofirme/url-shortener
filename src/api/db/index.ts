import { Sequelize } from 'sequelize';
import 'dotenv/config'


const sequelize = new Sequelize(
  `${process.env.DATABASE_URL}`, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
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