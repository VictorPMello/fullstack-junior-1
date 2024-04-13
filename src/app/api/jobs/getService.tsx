import { jobs as data } from '../../../data/jobs';

export async function getAll() {
  return Response.json(data);
}
