import { middleware } from '../middleware';
import { validateBody } from './Service';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const auth = middleware(req);

  if (auth.status === 401) return auth;

  try {
    const body = await req.json();
    return validateBody(body);
  } catch (error) {
    if (error)
      return Response.json(
        { message: 'Corpo da requisição está vazio!' },
        { status: 400 }
      );
  }
}
