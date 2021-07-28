import React from 'react'
import Banner from '../Organisms/Banner'


const Teachers = () => {

  return  (
    <>
    <Banner
    color="third-color"
    image={{
      src:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      alt: "Banner profesores"
    }}
    title="Nuestros profesores"
    subtitle="Este plantel esta altamente calificado para guiarte en tu educacion"
    />

      <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
        <article>
            <div className="s-px-4">
              <div className="img-container circle s-mb-2">
                <img 
                src="https://i.insider.com/546cf3466bb3f7e0717f91b1" 
                alt="Quincy Larson" 
                />
              </div>
            </div>
            <div className="center">
              <p className="t3 s-mb-1">
                Quincy Larson
              </p>
              <p
              >USA
              </p>
            </div>
          </article>
          <article>
            <div className="s-px-4">
              <div className="img-container circle s-mb-2">
                <img 
                src="https://edteam-media.s3.amazonaws.com/users/avatar/c3e463c6-8c4f-415e-b4c4-a2e283d9a205.png" 
                alt="Quincy Larson" 
                />
              </div>
            </div>
            <div className="center">
              <p className="t3 s-mb-1">
                Beto Quiroga
              </p>
              <p
              >COLOMBIA
              </p>
            </div>
          </article>
          <article>
            <div className="s-px-4">
              <div className="img-container circle s-mb-2">
                <img 
                src="https://www.filepicker.io/api/file/TIPmRlOTAKzOXNiRtdPg" 
                alt="Quincy Larson" 
                />
              </div>
            </div>
            <div className="center">
              <p className="t3 s-mb-1">
               Carlos Azaustre
              </p>
              <p
              >ESPAÑA
              </p>
            </div>
          </article>
          <article>
            <div className="s-px-4">
              <div className="img-container circle s-mb-2">
                <img 
                src="https://yt3.ggpht.com/ytc/AKedOLTRo8ZASoCFTKna59k8FgkqP-Pu0v4gWHm_JeNn=s900-c-k-c0x00ffffff-no-rj"
                alt="Quincy Larson" 
                />
              </div>
            </div>
            <div className="center">
              <p className="t3 s-mb-1">
                Alexys Lozada
              </p>
              <p
              >MEXICO
              </p>
            </div>
          </article>
          <article>
            <div className="s-px-4">
              <div className="img-container circle s-mb-2">
                <img 
                src="https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2018/04/entrevista-julioprofe.jpg?resize=1080%2C608&quality=80&ssl=1" 
                alt="Quincy Larson" 
                />
              </div>
            </div>
            <div className="center">
              <p className="t3 s-mb-1">
                Julio Profe
              </p>
              <p
              >COLOMBIA
              </p>
            </div>
          </article>
          <article>
            <div className="s-px-4">
              <div className="img-container circle s-mb-2">
                <img 
                src="https://pbs.twimg.com/profile_images/1253811397697458177/F2kpcu7U_400x400.jpg" 
                alt="Quincy Larson" 
                />
              </div>
            </div>
            <div className="center">
              <p className="t3 s-mb-1">
                Lucas Dalto
              </p>
              <p
              >ARGENTINA
              </p>
            </div>
          </article>
          <article>
            <div className="s-px-4">
              <div className="img-container circle s-mb-2">
                <img 
                src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hOTQ4NGU1MDc3NTI3YjlkNGQ4YmRjN2MyNzJmYzE2ZD9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.dqcuCBgz5yLgdicV1WrsxvNvwbix_6KdkiCgXDcpkOA" 
                alt="Quincy Larson" 
                />
              </div>
            </div>
            <div className="center">
              <p className="t3 s-mb-1">
                NICOLAS SHURMAN
              </p>
              <p
              >CHILE
              </p>
            </div>
          </article>
          <article>
            <div className="s-px-4">
              <div className="img-container circle s-mb-2">
                <img 
                src="https://victorroblesweb.es/wp-content/uploads/2017/06/victor-robles-web.jpg" 
                alt="Quincy Larson" 
                />
              </div>
            </div>
            <div className="center">
              <p className="t3 s-mb-1">
                Victor Robles
              </p>
              <p
              >ESPAÑA
              </p>
            </div>
          </article>
    </main>
    
  </>

  )
}

/*const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

*/

export default Teachers