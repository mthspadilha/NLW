import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1624403963959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            //dados da tabela
            new Table({
                name: "users",
                columns: [{
                    name: "id",
                    type: "uuid", //UNIVERSAL UNIQUE IDENTIFIER//
                    isPrimary: true
                    //Utilizar uma biblioteca que a api fique responsavel pela geração do ID.
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "admin",
                    type: "boolean",
                    default: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }]



            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
