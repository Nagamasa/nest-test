import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// クラスがEntityであることを定義するデコレータ
@Entity()
export class Task {
    // 自動採番の主キーカラムであることを定義するデコレータ
    @PrimaryGeneratedColumn()
    id: number; // id

    // テーブルのカラムであることを定義するデコレータ
    @Column()
    name: string; // タスクの名前

    @Column({ default: false })
    isCompleted: boolean;
}
