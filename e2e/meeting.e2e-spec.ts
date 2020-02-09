import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('/meetings', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('POST valid body returns 201', async () => {
    await request(app.getHttpServer())
      .post('/meetings')
      .send({ title: 'super meeting' })
      .expect(201);
  });

  it('POST invalid body returns 400', async () => {
    await request(app.getHttpServer())
      .post('/meetings')
      .send({ what: 'super meeting' })
      .expect(400);
  });

  it('POST valid bulk returns 201', async () => {
    await request(app.getHttpServer())
      .post('/meetings/bulk')
      .send([{ title: 'super meeting' }, { title: 'spider man' }])
      .expect(400);
  });

  it('POST partly invalid bulk returns 400', async () => {
    await request(app.getHttpServer())
      .post('/meetings/bulk')
      .send([{ title: 'super meeting' }, { what: 'spider man' }])
      .expect(400);

    await request(app.getHttpServer())
      .get('/meetings')
      .expect(200, []);
  });

  it('GET all meetings retuns empty list', async () => {
    await request(app.getHttpServer())
      .get('/meetings')
      .expect(200, []);
  });

  it('GET meeting retuns created meeting', async () => {
    let id;

    await request(app.getHttpServer())
      .post('/meetings')
      .send({ title: 'super meeting' })
      .then(res => (id = res.body.id));

    await request(app.getHttpServer())
      .get(`/meetings/${id}`)
      .expect({ title: 'super meeting', id, description: null, imageUrl: null });
  });
});
