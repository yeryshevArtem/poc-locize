import { ApiProperty } from '@nestjs/swagger/dist';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class FilterQueryDto {
  @ApiProperty({
    description: 'The language of translation',
    example: 'en',
  })
  @IsOptional()
  @Type(() => String)
  lang: string;

  @ApiProperty({
    description: 'Namespace in which user defines the translation',
    example: 'navigation-bar',
  })
  @IsOptional()
  @Type(() => String)
  namespace: string;
}
