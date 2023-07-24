export const DELETE = async (request, {param}) => {
    try {
      const id = param.id
     /*  const db = await dbConnect(); */
  console.log(id);
     
      return NextResponse.json('User has been deleted!', { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json('Internal Server Error! ', { status: 500 });
    }
  };