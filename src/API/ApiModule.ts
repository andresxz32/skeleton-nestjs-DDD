
import { Module } from '@nestjs/common';
import { DomainModule } from 'src/Domain/DomainModule';

@Module({
    controllers: [
    ],
    imports: [DomainModule]
})
export class ApiModule { }