import { BadRequestException, createParamDecorator } from '@nestjs/common';

export const TransformBooleanString = () =>
  createParamDecorator(({ value }) => {
    if (typeof value === 'string' && (value === 'true' || value === 'false')) {
      if (value.toLowerCase() === 'true') {
        return true;
      } else if (value.toLowerCase() === 'false') {
        return false;
      }
    }
    throw new BadRequestException('Invalid boolean value');
  });
