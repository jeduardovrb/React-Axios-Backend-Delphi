import React, {  useEffect, useState } from 'react';
import api from './api';

const App = () => {
  const [clientes, setClientes] = useState([])
  
  const getapi = async () => {
    // const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    const response = await api.get('', {
      auth: {
        username: "usuario",
        password: "senha",
      },
    })
    setClientes( response.data );      
  }

  useEffect(() => {
    getapi();
  }, [getapi]);

  return (
    <div>
        <h1>Listar os clientes</h1>
        {clientes.map(cliente => {
          return (
            <li key={cliente.cliCodigo}>
              <h2>
                <strong>Código: </strong>
                {cliente.cliCodigo}
              </h2>
              <h2>
                <strong>Nome: </strong>
                {cliente.cliNome}
              </h2>
              <p>
                {cliente.cliTipo}
              </p>
  
            </li>
          )
        })}
    </div>
  )
}

export default App;