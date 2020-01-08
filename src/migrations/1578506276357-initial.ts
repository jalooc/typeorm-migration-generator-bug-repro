import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1578506276357 implements MigrationInterface {
    name = 'initial1578506276357'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `manage`.`foo` (`id` varchar(36) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `manage`.`foo`", undefined);
    }

}
