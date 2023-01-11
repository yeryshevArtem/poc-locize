import { Injectable, NotFoundException } from '@nestjs/common';
import { Translation } from './entities/translation.entity';

@Injectable()
export class TranslationsService {
  private translations: Translation[] = [
    {
      id: 1,
      language: 'en',
      namespace: 'footer',
      resources: [
        {
          key: 'company',
          value: 'Copmany',
        },
      ],
    },
  ];

  findAll() {
    return this.translations;
  }

  findOne(id: string) {
    const translation = this.translations.find(
      (translation) => translation.id === +id,
    );
    if (!translation) {
      throw new NotFoundException(`Translation #${id} not found`);
    }
    return translation;
  }

  create(createTranslationDto: any) {
    this.translations.push(createTranslationDto);
  }

  update(id: string, updateTranslationDto: any) {
    const existingTranslation = this.findOne(id);
    if (existingTranslation) {
      // TODO: refactor it
    }
  }

  remove(id: string) {
    const translationIndex = this.translations.findIndex(
      (item) => item.id === +id,
    );
    if (translationIndex >= 0) {
      this.translations.splice(translationIndex, 1);
    }
  }
}
