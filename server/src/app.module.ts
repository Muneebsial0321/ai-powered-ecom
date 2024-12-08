import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [AuthModule, ProductsModule, AdminModule, OrderModule, PaymentModule, UsersModule, MailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
