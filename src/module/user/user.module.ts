import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/model/models.module';
import { UserController } from './user.controller';

@Module({
  imports: [ModelsModule],
  controllers: [UserController],
})
export class UserModule {}
