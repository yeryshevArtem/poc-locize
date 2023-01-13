import { Injectable } from '@nestjs/common';
import { LANGUAGES } from './constants/languages';

@Injectable()
export class LanguagesService {
  findAll() {
    return LANGUAGES;
  }
}
