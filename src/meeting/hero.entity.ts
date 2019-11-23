import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  public id!: number;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @Column({ type: 'varchar', length: 255, nullable: false })
  public name!: string;

  @IsOptional({ always: true })
  @IsInt({ always: true })
  @Column({ type: 'int', default: 0 })
  public power!: number;
}
