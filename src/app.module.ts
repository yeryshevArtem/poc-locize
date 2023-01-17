import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TranslationsModule } from './translations/translations.module';
import { LanguagesModule } from './languages/languages.module';

@Module({
  imports: [
    TranslationsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/translations'),
    LanguagesModule,
  ],
})
export class AppModule {}
