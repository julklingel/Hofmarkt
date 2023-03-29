import { HttpStatus, ParseFilePipeBuilder } from '@nestjs/common';

export const imageUploadPipe = new ParseFilePipeBuilder()
  .addFileTypeValidator({
    fileType: 'jpeg',
  })
  .addMaxSizeValidator({
    maxSize: 2000000, // in bytes
  })
  .build({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  });
