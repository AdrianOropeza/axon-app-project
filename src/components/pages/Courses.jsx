import React, {useEffect} from 'react'
import Banner from '../Organisms/Banner'
import { connect } from "react-redux"
import store from '../../redux/store'
import { getAllCourses } from '../../redux/actionCreators';
import Card from '../Organisms/Card';

const Courses = ({ courses }) => {

  useEffect(() => {
    store.dispatch(getAllCourses())

  }, [])

  
  return (
    <>
    <Banner
      color="accent-color"
      image={{
        src: "https://www.wallpapertip.com/wmimgs/83-838195_javascript-javascript-hd.png",
        alt: "Cursos",
      }}
      title="Cursos"
      subtitle="Comienza desde cero hoy mismo hasta dominar la tecnología"
    />
    {
      courses && 
      <main className="ed-grid m-grid-5">
      {
          courses.map(c => (
            <Card 
            path="cursos"
            picture={c.picture}
            name={c.name}
            key={c.id}
            card={c.id}
            />

        ))
      }
      </main>
    }
    </>
  )
}

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)