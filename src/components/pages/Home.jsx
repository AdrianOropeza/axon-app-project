import React, {useEffect}from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store';
import { getAllPosts } from '../../redux/actionCreators'
import Publication from '../Organisms/Publication'
import Vents from '../Organisms/Vents';
import styled from 'styled-components';

const Home = ({ posts }) => { 

  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])

  return (
    <>
  <Banner
  color="dark-color"
  image={{
    src: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Inicio",
  }}
  title="¡Unete a nuestra comunidad!"
  subtitle="Comienza desde cero hoy mismo hasta dominar la tecnología del mañana, estudia mediante el método Q y toma proyectos remunerados -  guiados por los mejores. Comienza hoy mismo a aprender y crecer en esta gran equipo"
  home
/>
<main className="ed-grid m-grid-4">
  <div>
    <Vents />
  </div>
  <div>
    <Vents />
  </div>
  <div>
    <Vents />
  </div>
  <div>
    <Vents />
  </div>
        <div className="l-section m-cols-3">
          <Publicaciones>Ultimas publicaciones</Publicaciones>
          {
            posts ?
            <div>
              { 
                posts.map(p =>
                <Publication
                  title={p.title}
                  author={p.author}
                  fecha={p.fecha}
                  content={p.content}
                  key={p.id}
                />
              )
              }
            </div> :
            <p>No existen publicaciones en la BD</p>
          }
        </div>
        <div>
          <h2> Lista de categorías </h2>
          <ul className="feature-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
     
</>
  ) 
}

const Publicaciones = styled.h2`
  color: #006DC6;

  &:hover {
      color: #006DC6;
  }
`;

const mapStateToProps = state => ({
  posts:state.postReducer.posts
})

export default connect(mapStateToProps, {})(Home)







