import { NextRequest } from 'next/server';
import { getById } from './Service';

export function GET(req: NextRequest) {
  const auth = req.headers.get('Authorization');

  if (auth !== 'naranja-labs')
    return Response.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );

  const id = req.nextUrl.pathname.replace('/api/jobs/', '');

  return getById(id);
}
