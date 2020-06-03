import { ArrayUnique, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type UUID = string;

const always = true;
const each = true;

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @IsNotEmpty({ always })
  @IsString({ always })
  @MaxLength(120, { always })
  @Column({ type: 'nvarchar', nullable: false, length: 120 })
  public title!: string;

  @IsOptional({ always })
  @IsString({ always })
  @Column({ type: 'text', nullable: true, default: null })
  public description?: string;

  @IsOptional({ always })
  @IsString({ always })
  @Column({ name: 'image_url', type: 'nvarchar', nullable: true, default: null })
  public imageUrl?: string;

  @IsNotEmpty({ always })
  @IsString({ always })
  @IsUUID('4', { always })
  @Column({ name: 'creator_id', type: 'nvarchar', nullable: false })
  public creatorId!: UUID;

  @IsNotEmpty({ always, each })
  @IsString({ always, each })
  @IsUUID('4', { always, each })
  @ArrayUnique({ always })
  @Column({ name: 'admins_ids', type: 'simple-array', nullable: false })
  public adminsIds: UUID[] = [];
}
