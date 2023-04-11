import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const [req] = ctx.getArgs(); 
    if (data) {
      return req.user[data];
    }
    return req.user;
  },
);
