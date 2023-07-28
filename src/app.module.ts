import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelsModule } from './model/models.module';
import { UserController } from './module/user/user.controller';

@Module({
  imports: [ModelsModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
