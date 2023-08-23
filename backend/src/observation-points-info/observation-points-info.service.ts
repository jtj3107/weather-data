import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as iconv from 'iconv-lite';
import * as Papa from 'papaparse';
import { ObservationPointsInfo } from 'src/entities/observation-points-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ObservationPointsInfoService {
    constructor(
        @Inject("OBSERVATION_POINTS_INFO_REPOSITORY")
        private observationPointsInfoRepository: Repository<ObservationPointsInfo>,
    ) { }

    async saveObservationPoints() {
        const buffer = fs.readFileSync('META20230617194103.csv');
        const data = iconv.decode(buffer, 'euc-kr');

        const results = Papa.parse(data, {
            header: true,
            skipEmptyLines: true,
        });

        for (const item of results.data) {
            const observationPointsInfo = new ObservationPointsInfo();

            observationPointsInfo.branchNumber = item['지점'] ? Number(item['지점']) : null;
            observationPointsInfo.branchName = item['지점명'] ?? null;
            observationPointsInfo.branchAddress = item['지점주소'] ?? null;
            observationPointsInfo.administrativeOffice = item['관리관서'] ?? null;
            observationPointsInfo.latitude = item['위도'] ? parseFloat(item['위도']) : null;
            observationPointsInfo.longitude = item['경도'] ? parseFloat(item['경도']) : null;

            // Check if any field is null before saving
            if (
                observationPointsInfo.branchNumber &&
                observationPointsInfo.branchName &&
                observationPointsInfo.branchAddress &&
                observationPointsInfo.administrativeOffice &&
                observationPointsInfo.latitude &&
                observationPointsInfo.longitude
            ) {
                await this.observationPointsInfoRepository.save(observationPointsInfo);
            }
        }
    }
}