import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Translation, TranslationSchema } from './entities/translation.entity';
import { TranslationsController } from './translations.controller';
import { TranslationsService } from './translations.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Translation.name,
        schema: TranslationSchema,
      },
    ]),
  ],
  controllers: [TranslationsController],
  providers: [TranslationsService],
})
export class TranslationsModule {}
