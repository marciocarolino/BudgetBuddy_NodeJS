import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.LOCALHOST,
      port: Number(process.env.PORT),
      username: 'postgres',
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      // entities: [UserEntity],
      autoLoadEntities: true,
      synchronize: false,
    }),
  ],
})
export class ConfigDataBaseModule {}
