import { jobs as data } from '../../../../data/jobs';

interface Job {
  name: 'string';
  age: 'number';
  phone: 'string';
  state: 'string';
  city: 'string';
}

export const validateBody = (body: Job) => {
  if (Object.keys(body).length === 0)
    return Response.json(
      { message: 'Corpo da requisição está vazio!' },
      { status: 400 }
    );

  if (
    !body.name ||
    !body.age ||
    !body.phone ||
    !body.state ||
    !body.city
  )
    return Response.json(
      { message: 'Corpo da requisição estão faltando elementos!' },
      { status: 400 }
    );

  return Response.json({
    message: `Thank you for your application, ${body.name}`,
  });
};
