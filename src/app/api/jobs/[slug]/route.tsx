import { NextRequest } from 'next/server';
import { getById } from './Service';

export function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.replace('/api/jobs/', '');

  return getById(id);
}
