import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationsModule } from './translations/translations.module';

@Module({
  imports: [
    TranslationsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/translations'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
