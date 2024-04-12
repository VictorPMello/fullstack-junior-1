export async function POST(req: Request) {
  const test = await req.json();
  console.log(test);

  if (!test || Object.keys(test)[0] !== 'message') {
    return Response.json({ message: 'No data' }, { status: 400 });
  }

  return Response.json(test);
}

// export async function POST(request: Request) {
//   const res = await request.json();
//   return Response.json({ res });
// }
