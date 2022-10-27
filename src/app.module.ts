import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { DatabaseConnection } from 'src/Database/DatabaseConnection';
import { DatabaseModule } from 'src/Database/DatabaseModule';
import { getEnvPath } from 'src/Shared/Helper/env.helper';
import { ApiModule } from './API/ApiModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './Domain/DomainModule';
import { PersistenceModule } from './Persistence/PersistenceModule';

const envFilePath: string = getEnvPath(`${__dirname}/Shared/Envs`);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [DatabaseModule],
      useFactory: (database: DatabaseConnection) => {
        return <MongooseModuleOptions>{
          uri: database.get(),
          useNewUrlParser: true,
          useUnifiedTopology: true,
          ignoreUndefined: true,
        };
      },
      inject: [DatabaseConnection],
    }),
    PersistenceModule,
    ApiModule,
    DomainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
