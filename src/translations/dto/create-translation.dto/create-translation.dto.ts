import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateTranslationDto {
  // We must update the validation to check for enum
  @ApiProperty({
    description: 'The language of translation',
    example: 'en',
  })
  @IsString()
  readonly language: string;

  @ApiProperty({
    description: 'Namespace in which user defines the translation',
    example: 'navigation-bar',
  })
  @IsString()
  readonly namespace: string;

  @ApiProperty({ description: 'The key of translation', example: 'vehicle' })
  @IsString()
  readonly key: string;

  @ApiProperty({
    description: 'The value of translation',
    example: 'Vehicle',
  })
  @IsString()
  readonly value: string;
}
