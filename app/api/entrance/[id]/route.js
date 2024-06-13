
import { NextRequest, NextResponse } from 'next/server';
import { connectDb } from '/connectdb';




export async function GET( request,{ params }) {
  try {
    const client = await connectDb(); // Conectar a la base de datos
    const db = client.db('finger_print'); // Acceder a la base de datos específica

    
    console.log(params.id)

    // Buscar todos los registros que coincidan con el campo `name`
    const usuarios = await db.collection('entrance').find({ "id": params.id }).toArray();

    if (usuarios.length === 0) {
      return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 });
    }

    return NextResponse.json(usuarios); // Devolver los usuarios en formato JSON
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Error al obtener datos' }, { status: 500 });
  }
}
