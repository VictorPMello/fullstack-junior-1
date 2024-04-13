import { validateBody } from './Service';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
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
