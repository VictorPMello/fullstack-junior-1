import { getAll } from '../../app/api/jobs/Service';
import { NextRequest, NextResponse } from 'next/server';
import supertest from 'supertest';
import { mockData } from './data.mock';
import { middleware } from '../..//app/api/jobs/middleware';

const mockRequest = (method: string, url: string) => {
  return new NextRequest(new URL(url).toString(), { method });
};

jest.mock('next/server', () => ({
  NextRequest: mockRequest,
  NextResponse,
}));

describe('GET all jobs /api/jobs', () => {
  it('should return all jobs', async () => {
    const res = await supertest(getAll).get('/api/jobs');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockData);
  });
});

describe('GET jobs by level /api/jobs?level=Junior', () => {
  it('should return jobs by level', async () => {
    const res = await supertest(getAll).get('/api/jobs?level=Junior');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      mockData.filter((job) => job.level === 'Junior')
    );
  });
});

describe('GET jobs by level /api/jobs?level=Pleno', () => {
  it('should return jobs by level', async () => {
    const res = await supertest(getAll).get('/api/jobs?level=Pleno');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      message: 'No data found',
    });
  });
});

describe('Middleware', () => {
  it('should return 401 if no authorization header is provided', () => {
    const req = mockRequest('GET', '/api/jobs');
    const res = middleware(req);

    expect(res.status).toBe(401);
    expect(res.body).toEqual({
      message: 'Unauthorized',
    });
  });
});

describe('GET job by id /api/jobs/1', () => {
  it('should return job by id', async () => {
    const res = await supertest(getAll).get('/api/jobs/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockData[0]);
  });
});

describe('GET job by id /api/jobs/10', () => {
  it('should return 404 if job not found', async () => {
    const res = await supertest(getAll).get('/api/jobs/10');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      message: 'Job not found',
    });
  });
});

describe('POST job /api/jobs/submit', () => {
  it('should return 201 if job is submitted', async () => {
    const res = await supertest(getAll).post('/api/jobs/submit');
    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      message: `Thank you for your application, ${res.body.name}`,
    });
  });
});
