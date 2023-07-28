import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
        __dirname + '/**/*.e{.ts,.js}',
      ],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([User]),
  ],
  exports: [UserService],
  providers: [UserService],
})
export class ModelsModule {}
