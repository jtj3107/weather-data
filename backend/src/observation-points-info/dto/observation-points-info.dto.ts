import { PartialType } from '@nestjs/mapped-types';
export class CreateObservationPointsInfoDto {}

export class UpdateObservationPointsInfoDto extends PartialType(CreateObservationPointsInfoDto) {}
