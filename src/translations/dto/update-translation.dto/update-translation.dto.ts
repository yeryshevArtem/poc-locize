import { Language } from 'src/translations/types/language';

export class UpdateTranslationDto {
  readonly language?: Language;
  readonly namespace?: string;
  readonly key?: string;
  readonly value?: string;
}
