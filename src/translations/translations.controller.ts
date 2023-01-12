import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TranslationsService } from './translations.service';

@Controller('translations')
export class TranslationsController {
  constructor(private readonly tranlationsService: TranslationsService) {}

  @Get()
  findAll(@Query() queryParams) {
    const { lang, namespace } = queryParams;
    return this.tranlationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tranlationsService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.tranlationsService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.tranlationsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tranlationsService.remove(id);
  }
}
