import { Language } from 'src/translations/types/language';
import { IsString } from 'class-validator';

export class CreateTranslationDto {
  readonly language: Language;

  @IsString()
  readonly namespace: string;

  @IsString()
  readonly key: string;

  @IsString()
  readonly value: string;
}
