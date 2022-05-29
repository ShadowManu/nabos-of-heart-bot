import { MigrationInterface, QueryRunner } from 'typeorm';

export class addMessage1653792780416 implements MigrationInterface {
  name = 'addMessage1653792780416';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "message" (
        "chatId" bigint NOT NULL,
        "id" bigint NOT NULL,
        "original" json NOT NULL,

        CONSTRAINT "message_pkey" PRIMARY KEY ("chatId", "id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "message"`);
  }
}
