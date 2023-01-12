import { Language } from 'src/translations/types/language';
import { IsString } from 'class-validator';

export class CreateTranslationDto {
  @IsString()
  readonly language: Language;

  @IsString()
  readonly namespace: string;

  @IsString()
  key: string;

  @IsString()
  readonly value: string;
}
