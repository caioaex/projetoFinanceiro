import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BillModule } from './bill/bill.module';

@Module({
  imports: [UserModule, AuthModule, BillModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
