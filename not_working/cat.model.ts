import { Prop } from './prop.decorator';
import ObjectId from './ObjectIdType';

export class Cat {
  @Prop()
  name: ObjectId;
}
