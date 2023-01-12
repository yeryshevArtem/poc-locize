import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Language } from '../types/language';

@Schema()
export class Translation extends Document {
  @Prop()
  key: string;

  @Prop()
  language: Language;

  @Prop()
  namespace: string;

  @Prop()
  value: string;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
