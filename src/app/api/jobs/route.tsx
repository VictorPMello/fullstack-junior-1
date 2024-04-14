import { NextRequest } from 'next/server';
import { getAll, getByLevel } from './Service';
import { middleware } from './middleware';

export function GET(req: NextRequest) {
  const auth = middleware(req);

  if (auth.status === 401) return auth;

  const searchParams = req.nextUrl.searchParams.get('level');

  if (searchParams) return getByLevel(searchParams);

  return getAll();
}

//! Refatorar

// * escrever testes para as rotas
// * criar animações para frontend
// * alterar readme.md
