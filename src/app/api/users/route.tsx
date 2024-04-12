import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  console.log(req.headers.get('authorization'));

  const data: {
    name: string;
    age: number;
    password: string;
  } = {
    name: 'John Doe',
    age: 30,
    password: 'password',
  };

  return Response.json(data);
}
