import { NextRequest } from 'next/server';
import { getById } from './Service';
import { middleware } from '../middleware';

export function GET(req: NextRequest) {
  const auth = middleware(req);

  if (auth.status === 401) return auth;

  const id = req.nextUrl.pathname.replace('/api/jobs/', '');

  return getById(id);
}
