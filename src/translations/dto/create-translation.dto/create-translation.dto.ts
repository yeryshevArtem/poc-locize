import { Language } from 'src/translations/types/language';

export class CreateTranslationDto {
  language: Language;
  namespace: string;
  key: string;
  value: string;
}
