import { NextResponse } from 'next/server';
import { connectDb } from '/connectdb';

export const GET = async (req) => {
  try {
    const client = await connectDb(); // Llamar a la función para conectar a la base de datos
    const db = client.db('finger_print');
    
    const usuarios = await db
      .collection('user')
      .find({})
      .toArray();
    
    return NextResponse.json(usuarios);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Error al obtener datos' }, { status: 500 });
  }
};
