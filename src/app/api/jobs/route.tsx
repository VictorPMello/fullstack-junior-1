import { NextRequest } from 'next/server';
import { getAll, getByLevel } from './Service';

export function GET(req: NextRequest) {
  const auth = req.headers.get('Authorization');

  if (auth !== 'naranja-labs')
    return Response.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );

  const searchParams = req.nextUrl.searchParams.get('level');

  if (searchParams) return getByLevel(searchParams);

  return getAll();
}
