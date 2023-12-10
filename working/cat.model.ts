import { Prop } from "./prop.decorator";

type ObjectId = string;

export class Cat {
  @Prop()
  name: ObjectId;
}
