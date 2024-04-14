import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/api/jobs',
};

export function middleware(req: NextRequest) {
  const auth = req.headers.get('Authorization');

  if (!auth || auth !== 'naranja-labs')
    return Response.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );

  return NextResponse.next();
}
