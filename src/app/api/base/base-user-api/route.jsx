import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf-8');

export async function GET(request,{params}) {
    return NextResponse.json(JSON.parse(file));
}
export async function POST(request,response) {
    //parseando o arquivo para o json nativo
    const body = await JSON.parse(file)
    //console.log(body);
        
    //pegando a inserção do post
    const usuario = await request.json();

    for(let x = 0; x < body.usuarios.length; x++) {
        const u = body.usuarios[x];
        console.log("Usuário da base: ", u.nome);
        if(u.email == usuario.email && u.senha == usuario.senha) {
            return NextResponse.json({"STATUS": "OK"})
        }
    }


    return NextResponse.json({"status                   ": "ok"})
}