import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, GoodbyeService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService, GoodbyeService],
})
export class AppModule {}
