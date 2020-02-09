import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(120, { always: true })
  @Column({ type: 'nvarchar', nullable: false, length: 120 })
  public title!: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true, default: null })
  public description?: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ name: 'image_url', type: 'nvarchar', nullable: true, default: null })
  public imageUrl?: string;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(36, { always: true })
  @ManyToOne(_ => User, { nullable: false, lazy: true })
  public creator!: User;
}
