import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const [req] = ctx.getArgs(); // Get the request object from the args array directly
    if (data) {
      return req.user[data];
    }
    return req.user;
  },
);
