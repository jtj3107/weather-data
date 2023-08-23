import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('weatherdata')
export class WeatherData  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  TM: Date;

  @Column()
  STN: number;

  @Column()
  WD: number;

  @Column({ type: 'float' })
  WS: number;

  @Column({ type: 'float' })
  TA: number;

  @Column({ type: 'float' })
  HM: number;

  @Column({ type: 'float' })
  RN: number;
}
