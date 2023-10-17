import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'actived', default: true })
  actived: boolean;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'create_at' })
  create_at: Date;

  @Column({ name: 'updated_at' })
  updated_at: Date;
}
