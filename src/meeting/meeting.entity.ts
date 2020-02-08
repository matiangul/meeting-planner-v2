import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @Column({ type: 'nvarchar', length: 120, nullable: false })
  public title!: string;

  @IsString({ always: true })
  @Column({ type: 'text', default: '', nullable: false })
  public description: string = '';
}
