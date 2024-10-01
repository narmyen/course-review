import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { ObjectId } from "mongodb";

@Injectable()
export class ParseObjectIdPipe implements PipeTransform<any, ObjectId> {

  public transform(value: any): ObjectId {
    try {
      const transformObjectId: ObjectId = ObjectId.createFromHexString(value);
      return transformObjectId;
    } catch (error) {
      throw new BadRequestException('Validation failed (ObjectId is expected)')
    }
  }
}

