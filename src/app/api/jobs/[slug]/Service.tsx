import { jobs as data } from '../../../../data/jobs';

export const getById = (id: string) => {
  const job = data.find((job) => job.id === +id);

  if (!job) {
    return Response.json(
      { error: 'Job não encontrado!' },
      { status: 404 }
    );
  }

  return Response.json(job);
};
