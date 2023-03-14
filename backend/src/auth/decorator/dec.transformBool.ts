import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';

export function TransformBooleanString(): PropertyDecorator {
  return Transform(({ value }) => {
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string' && (value === 'true' || value === 'false')) {
      if (value.toLowerCase() === 'true') {
        return true;
      } else if (value.toLowerCase() === 'false') {
        return false;
      }
    }
    throw new BadRequestException('Invalid boolean value');
  });
}
