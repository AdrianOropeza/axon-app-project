import React from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';




const authentication = e => {
  e.preventDefault();
  const form = e.target;

  const data = {
    "email": form.email.value,
    "password": form.password.value
  }

  Axios.post('https://api-edteam.alejogs4.now.sh/login/', data)
  .then( r => {
    localStorage.setItem('token', r.data.token)
    window.location ="/";
  })
  .catch(e => {
    alert("Error al iniciar sesión")
  })

}

const Login = () => (
    <div className="ed-grid">
      <div className="l-blocj"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Mi inicio</h1>
        <form onSubmit={authentication.bind()}>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input type="email" id="email" name="email" required placeholder="ejemplo@gmail.com"/>
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input type="password" id="password" name="password" required placeholder="Ingrese su contraseña"/>
            </label>
          </div>
          <div className="form__item">
            <input type="submit" className="button full" value="Iniciar sesión" />
          </div>
        </form>
        <div className="center">
          <span>No tienes cuenta de usuario? <Link to="/register">Crear Cuenta</Link></span>
        </div>
      </div>
    </div>
  )


export default Login