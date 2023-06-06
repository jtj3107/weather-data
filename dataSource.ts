import { DataSource } from "typeorm";
import { WeatherData } from "./src/entities/weather-datum.entity";

const dotenv = require("dotenv");
dotenv.config();

const dataSource = new DataSource({
  type: "mysql",
  host: process.env.dbHost,
  port: 3306,
  username: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.database,
  entities: [
   WeatherData
  ],
  migrations: [__dirname + "/src/migrations/*.ts"],
  charset: "utf8mb4",
  synchronize: false,
  // logging: true,
  logging: false,
});

export default dataSource;