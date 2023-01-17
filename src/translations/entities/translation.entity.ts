import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Translation extends Document {
  @Prop({ index: true })
  key: string;

  @Prop({ index: true })
  language: string;

  @Prop({ index: true })
  namespace: string;

  @Prop()
  value: string;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
TranslationSchema.index({ language: 1, type: -1 });
TranslationSchema.index({ namespace: 1, type: -1 });
TranslationSchema.index({ key: 1, type: -1 });

// https://mongoosejs.com/docs/guide.html#validateBeforeSave
