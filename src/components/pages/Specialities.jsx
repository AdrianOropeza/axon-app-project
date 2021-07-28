import React from 'react'
import Banner from '../Organisms/Banner'
import SpecialityComponent from '../Organisms/SpecialityComponent'

const Specialities = () => {

  return (
    <>
  <Banner 
  color="first-color"
  image={{
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    alt: "Banner especialidades"
  }}
  title="Especialidades"
  subtitle="Domina una tecnología con las rutas de aprendizaje que te ofrecemos"
  />
 <main className="ed-grid m-grid-3">
   <SpecialityComponent />
 </main>
  </>
  )
}

export default Specialities