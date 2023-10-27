import React from 'react'

export default async function LoginUser() {
    let users;

    try{
        const response = await fetch("http://localhost:3001/api/base/base-user-api");
        users = await response.json();
        console.log();
    } catch {
        console.log(error)
    }
  
    return (
        <div className="form-login">
            <h1>LOGIN</h1>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="idUser">Usuário:</label>
                        <input type="text" name="usuario" id = "idUser" placeholder='Digite seu nome ou email'/>
                        </div>
                    <div>
                        <label htmlFor="idPassword">Senha:</label>
                        <input type="password"name="senha" id="idPassword"  placeholder='Digite sua senha'/>
                    </div>
                    <div>
                       <button>Entrar</button>
                    </div>               
                </form>
            </div>
        </div>
    )
}
