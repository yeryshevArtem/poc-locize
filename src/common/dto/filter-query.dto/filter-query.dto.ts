import { ApiProperty } from '@nestjs/swagger/dist';
import { ApiPropertyOptional } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class FilterQueryDto {
  @ApiProperty({
    description: 'The language of translation',
    example: 'en',
  })
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => String)
  lang: string;

  @ApiPropertyOptional()
  @ApiProperty({
    description: 'Namespace in which user defines the translation',
    example: 'navigation-bar',
  })
  @IsOptional()
  @Type(() => String)
  namespace: string;
}
