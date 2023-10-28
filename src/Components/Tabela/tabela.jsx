import React from 'react'

export async function TabelaDados() {

  const response = await fetch('http://localhost:3000/api/laticionios')
  const queijos = await response.json();

  return (
    <div>
        <h1>Lista dos queijos</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {
                    queijos.map((item, indice) => (
                        <tr key={indice}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.preco}</td>
                            <td>{item.tipo}</td>
                        </tr>
                    ))

                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4">Queijos</td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}

