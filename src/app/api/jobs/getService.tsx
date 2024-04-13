import { jobs as data } from '../../../data/jobs';

export const getAll = () => Response.json(data);

export const getByLevel = (level: string) => {
  const filteredData = data.filter((job) => job.level === level);

  if (filteredData.length === 0) {
    return Response.json(
      { message: 'No data found' },
      { status: 404 }
    );
  }

  return Response.json(filteredData);
};
