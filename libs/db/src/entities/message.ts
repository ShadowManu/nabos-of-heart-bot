import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryColumn('bigint')
  chatId!: number;

  @PrimaryColumn('bigint')
  id!: number;

  @Column('json')
  original: unknown;
}
