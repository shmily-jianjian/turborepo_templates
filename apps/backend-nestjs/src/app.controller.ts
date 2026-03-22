import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
<<<<<<< HEAD
=======
import { Implement, implement, ORPCError } from '@orpc/nest';
import { contract } from 'contracts';
import { BusinessException } from './common/filters/all-exceptions.filter';
>>>>>>> 403f9c4 (feat: orpc)

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
<<<<<<< HEAD
  getHello() {
    return this.appService.getHello();
=======
  test() {
    throw new BusinessException(12345678, '测试自定义业务异常');
  }

  @Implement(contract.user.getUser)
  getHello() {
    return implement(contract.user.getUser).handler(() => {
      return {
        code: 0,
        message: 'success',
        data: [
          {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            age: 30,
          },
        ],
      };
    });
  }

  @Implement(contract.user.addUser)
  addUser() {
    return implement(contract.user.addUser).handler(() => {
      return {
        code: 1,
        message: 'success',
        data: {
          id: 1,
        },
      };
    });
>>>>>>> 403f9c4 (feat: orpc)
  }
}
