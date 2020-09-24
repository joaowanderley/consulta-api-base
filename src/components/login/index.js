import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

export default function Login () {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [errorMessage, setErrorMEssage] = useState(null)

  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    if (usuario !== 'admin' || senha !== 'star') {
      setErrorMEssage('Usuário ou senha inválidos')
    } else {
      setErrorMEssage(null)
      setUsuario('')
      setSenha('')
      history.push('/lista')
    }
  }
  return (
    <div className='container'>
      <form onSubmit={handleLogin}>
        <section>
          <input
            placeholder='Usuário'
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            value={senha}
            onChange={e => setSenha(e.target.value)}

          />
          {errorMessage !== null && <p>{errorMessage}</p>}
          <button type='submit'>Logar</button>
        </section>
      </form>
    </div>
  )
}
