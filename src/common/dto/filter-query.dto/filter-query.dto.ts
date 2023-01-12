import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class FilterQueryDto {
  @IsOptional()
  @Type(() => String)
  lang: string;

  @IsOptional()
  @Type(() => String)
  namespace: string;
}
