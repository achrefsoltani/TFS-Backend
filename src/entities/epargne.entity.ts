import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Epargne {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  Banque: string;

  @Column()
  type: string;

  @Column()
  taux: string;

  @Column()
  lien: string;

  @Column()
  description: string;
}