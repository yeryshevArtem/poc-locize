import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TranslationsService } from './translations.service';

@Controller('translations')
export class TranslationsController {
  constructor(private readonly tranlationsService: TranslationsService) {}

  @Get()
  findAll() {
    return 'Should return all translations';
  }

  @Get(':lang')
  findOne(@Param('lang') lang: string) {
    return `should return translations for ${lang}.`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':lang')
  update(@Param('lang') lang: string, @Body() body: any) {
    return `should update translations for ${lang}.`;
  }

  @Delete(':lang')
  delete(@Param('lang') lang: string) {
    return `should remove all translations for ${lang}`;
  }
}
