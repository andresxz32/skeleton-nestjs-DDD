import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { Connection } from 'mongoose';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let connection: Connection;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/check (GET)', () => {
    return request(app.getHttpServer())
      .get('/check')
      .expect(200)
      .expect('Ok');
  });
});
