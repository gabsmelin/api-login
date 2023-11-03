import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf-8');

export async function GET(request,{params}) {
    return NextResponse.json(JSON.parse(file));
}
export async function POST(request,response) {
    //parseando o arquivo para o json nativo
    const body = await JSON.parse(file)
        
    //pegando a inserção do post
    const usuario = await request.json();

    const userValido = body.usuarios.find((user) => user.email == usuario.email && user.senha == usuario.senha);

    if(!userValido) {
        return NextResponse.json({"status":false})
    }
    return NextResponse.json({"status":true})
}