import { Module } from '@nestjs/common';
import { ConfigDataBaseModule } from './config/database/configDataBase.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ConfigDataBaseModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
