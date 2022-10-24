import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConnection {
    private readonly connectionString: string;

    constructor(private readonly configService: ConfigService) {
        this.connectionString = this.configService.get<string>('DB_CONNECTION');//Replace DB_CONNECTION with your environment variable name
    }

    public get = (): string => this.connectionString;
}