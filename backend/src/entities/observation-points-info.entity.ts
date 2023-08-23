import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('observationPointsInfo')
export class ObservationPointsInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ comment: "지점 번호" })
    branchNumber: number;

    @Column({ comment: "지점명" })
    branchName: string;

    @Column({ comment: "지점 주소" })
    branchAddress: string;

    @Column({ comment: "관리 관서" })
    administrativeOffice: string;

    @Column({ type: 'float', comment: "위도" })
    latitude: number;

    @Column({ type: 'float', comment: "경도" })
    longitude: number;
}
