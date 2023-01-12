import { Language } from '../types/language';

export class Translation {
  id: number;
  language: Language;
  namespace: string;
  key: string;
  value: string;
}
