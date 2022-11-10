import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConnection {
    private readonly connectionString: string;

    constructor(private readonly configService: ConfigService) {
        this.connectionString = this.configService.get<string>('DB_CONNECTION');//Replace DB_CONNECTION with your environment variable name
        this.connectionString = "mongodb+srv://andresxz32:oDQDa67GxmnBDJdj1dv13pUz7L3oyPSBi@cluster0.38tw3.mongodb.net/pruebas"
    }

    public get = (): string => this.connectionString;
}