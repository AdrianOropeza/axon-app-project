import React from 'react'
import Widget from './Widget';

const SpecialityComponent = () => {
  return (
    <>
    <article className="card s-border">
    <div className="img-container s-ratio-16-9">
      <img 
      src="https://www.bbva.com/wp-content/uploads/2015/12/Country-Networks_2-1920x1080.jpg"
      alt= "Especialidad Redes"
      />
    </div>
    <div className="card__data s-pxy-2">
      <h3 className="center t4">Especialidad Redes</h3>
    </div>
  </article>
      <article className="card s-border">
      <div className="img-container s-ratio-16-9">
        <img 
        src="https://comunicare.b-cdn.net/wp-content/uploads/2020/08/mejores-programas-de-diseno-grafico.jpg"
        alt= "Especialidad Diseño"
        />
      </div>
      <div className="card__data s-pxy-2">
        <h3 className="center t4">Especialidad Diseño</h3>
      </div>
    </article>
        <article className="card s-border">
        <div className="img-container s-ratio-16-9">
          <img 
          src="https://www.projectadmin.org/wp-content/uploads/2019/06/190626_Blog_Feature_Scrum_Ceremony-1600x900.jpg"
          alt= "Especialidad Metodologías"
          />
        </div>
        <div className="card__data s-pxy-2">
          <h3 className="center t4">Especialidad Metodologías de Trabajo</h3>
        </div>
      </article>

      <div className="ed-grid">
        <Widget />
      </div>
        </>
  )
}

export default SpecialityComponent;