// import { applyDecorators } from '@nestjs/common';

/**
 * 아래와 같이 여러 데코레이터를 구성하여 controller에서는 Auth하나만 사용하여 한번의 custom decorator적용으로
 * 포함되는 4개의 decorater를 적용시킬수 있다.
 */
// export function Auth(...roles: Role[]) {
//   return applyDecorators(
//     SetMetadata('roles', roles),
//     UseGuards(AuthGuard, RolesGuard),
//     ApiBearerAuth(),
//     ApiUnauthorizedResponse({ description: 'Unauthorized' }),
//   );
// }
