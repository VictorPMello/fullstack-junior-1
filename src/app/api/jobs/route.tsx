import { getAll } from './getService';

export async function GET() {
  const test = await getAll();

  return test;
}
