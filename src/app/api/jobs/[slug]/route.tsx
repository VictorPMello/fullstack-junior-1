import { NextRequest } from 'next/server';
import { getById } from './Service';

export function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.replace('/api/jobs/', '');

  const test = getById(id);
  return test;
}
