import { Language } from 'src/translations/types/language';
import { IsString } from 'class-validator';

export class CreateTranslationDto {
  // We must update the validation to check for enum
  @IsString()
  readonly language: Language;

  @IsString()
  readonly namespace: string;

  @IsString()
  key: string;

  @IsString()
  readonly value: string;
}
