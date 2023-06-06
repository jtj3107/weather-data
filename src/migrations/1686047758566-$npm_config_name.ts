import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1686047758566 implements MigrationInterface {
    name = ' $npmConfigName1686047758566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`weatherdata\` (\`id\` int NOT NULL AUTO_INCREMENT, \`TM\` datetime NOT NULL, \`STN\` int NOT NULL, \`WD\` int NOT NULL, \`WS\` float NOT NULL, \`TA\` float NOT NULL, \`HM\` float NOT NULL, \`RN\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`weatherdata\``);
    }

}
