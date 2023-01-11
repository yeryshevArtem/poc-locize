import { Injectable } from '@nestjs/common';
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
}
