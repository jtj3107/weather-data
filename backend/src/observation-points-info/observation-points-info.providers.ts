import { ObservationPointsInfo } from "src/entities/observation-points-info.entity";
import { DataSource } from "typeorm";

export const observationPointsInfoProviders = [
  {
    provide: "OBSERVATION_POINTS_INFO_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ObservationPointsInfo),
    inject: ["DATA_SOURCE"],
  },
];