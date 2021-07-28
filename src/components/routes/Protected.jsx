/* Rutas protegidas */

import React from 'react'
import  { Redirect, Route } from "react-router-dom"

const Protected = ({ component: Component, ...rest}) => {
  
  const userLogged = localStorage.getItem('token');
  
  /*Usuario logeado */
  if (!userLogged) {
  return <Redirect to="/login" />
  }
  
  return <Route {...rest} component={Component}/>

}

export default Protected
