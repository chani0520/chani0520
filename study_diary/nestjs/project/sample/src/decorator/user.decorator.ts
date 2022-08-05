import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface UserEntity {
  name: string;
  age: number;
}

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
