import { DataSource } from "typeorm";
import { ObservationPointsInfo } from "./src/entities/observation-points-info.entity";
import { WeatherData } from "./src/entities/weather-datum.entity";

const dotenv = require("dotenv");
dotenv.config();

const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DBHOST,
  port: 3306,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
  entities: [
   WeatherData,
   ObservationPointsInfo,
  ],
  migrations: [__dirname + "/src/migrations/*.ts"],
  charset: "utf8mb4",
  synchronize: false,
  // logging: true,
  logging: false,
});

export default dataSource;