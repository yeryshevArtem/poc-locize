import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { FilterQueryDto } from 'src/common/dto/filter-query.dto/filter-query.dto';
import { CreateTranslationDto } from './dto/create-translation.dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto/update-translation.dto';
import { Translation } from './entities/translation.entity';

@Injectable()
export class TranslationsService {
  constructor(
    @InjectModel(Translation.name)
    private readonly translationModel: Model<Translation>,
  ) {}

  findAll(filterQueryDto: FilterQueryDto) {
    const { lang, namespace } = filterQueryDto;
    return this.translationModel
      .find({
        ...(lang && { language: lang }),
        ...(namespace && { namespace }),
      })
      .exec();
  }

  async findOne(id: string) {
    const translation = await this.translationModel.findOne({ _id: id }).exec();
    if (!translation) {
      throw new NotFoundException(`Translation #${id} not found`);
    }
    return translation;
  }

  create(createTranslationDto: CreateTranslationDto) {
    const translation = new this.translationModel(createTranslationDto);
    return translation.save();
  }

  async update(id: string, updateTranslationDto: UpdateTranslationDto) {
    const existingTranslation = await this.translationModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateTranslationDto },
        { new: true },
      )
      .exec();

    if (!existingTranslation) {
      throw new NotFoundException(`Translation #${id} not found`);
    }
    return existingTranslation;
  }

  async remove(id: string) {
    const translation = await this.findOne(id);
    return translation.remove();
  }
}
