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
import { CreateTranslationDto } from './dto/create-translation.dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto/update-translation.dto';
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
  create(@Body() createTranslationDto: CreateTranslationDto) {
    return this.tranlationsService.create(createTranslationDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTranslationDto: UpdateTranslationDto,
  ) {
    return this.tranlationsService.update(id, updateTranslationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tranlationsService.remove(id);
  }
}
