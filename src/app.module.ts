import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ShowModule } from './show/show.module';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ShowModule, BookModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
