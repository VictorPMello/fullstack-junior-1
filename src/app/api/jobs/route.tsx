import { NextRequest } from 'next/server';
import { getAll, getByLevel } from './getService';

export function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams.get('level');

  if (searchParams) return getByLevel(searchParams);

  return getAll();
}
