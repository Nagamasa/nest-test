import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './tasks/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'secret',
      database: 'mydb-dev',
      autoLoadEntities: true, // Entiryが自動的に読み込まれる
      synchronize: true, //アプリケーション起動時に自動でテーブルが作成される　本番では使用不可
     }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
