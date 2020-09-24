import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import './styles.css'

function Lista () {
  const [amigos, setAmigos] = useState([])

  useEffect(() => {
    try {
      api.get().then(
        response => {
          setAmigos(response.data.results)
        }).catch(err => {
        console.log(err)
      })
    } catch (error) {
      console.log('erro')
    }
  }, [])

  return (
    <ul>
      {amigos.map(amigo => (
        <li key={amigo.login.uuid}>
          <img src={amigo.picture.large} alt='thumbnail' />
          <h4>{amigo.login.username}</h4>
          <p>{amigo.dob.age}</p>
          <p>{amigo.nat}</p>
        </li>
      ))}
    </ul>
  )
}

export default Lista
