import { Module } from '@nestjs/common';
import { DatabaseConnection } from './DatabaseConnection';

@Module({
    providers: [DatabaseConnection],
    exports: [DatabaseConnection],
})
export class DatabaseModule { }