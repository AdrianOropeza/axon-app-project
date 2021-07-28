  
import React, { useEffect } from 'react'
import Vimeo from '@u-wave/react-vimeo';
import store from '../../redux/store';
import { getCourse, getFragment } from '../../redux/actionCreators';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Fragment = ({ fragment, course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
    store.dispatch(getFragment(123))
  }, [])

  return (
    <div className="class-page-container background dark-color s-pxy-4">
      {
        (fragment && course) && 
        <div className="ed-grid lg-grid-12">
          <div className="lg-cols-8 ">
            <div>
              <Vimeo
                video="https://vimeo.com/103201888"
                width={600}
              />
            </div>
            <div>
              <Titulo>{fragment.name}</Titulo>
              <span className="color light-color">{course.name}</span>
            </div>
          </div>
          <div className="lg-cols-4">
            <div>
              <Temario> Temario del curso </Temario>
              {
                course.data.classes.map(cl => (
                  <div className="course-class l-section" key={cl.class.id}>
                    <h3 className="color light-color">{cl.class.title}</h3>
                    <ul className="data-list">
                    {
                      cl.subjects.map(s => (
                        <li key={s.subject.id}>
                          <Link to={`/clase/${s.subject.id}`} className="color light-color" >{s.subject.title}</Link>
                        </li>
                      ))
                    }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

const Titulo = styled.h1`
  color: #007BDF;
`;

const Temario = styled.h3`
  color: #FBA905;
`;

const mapStateToProps = state => ({
  fragment: state.fragmentReducer.fragment,
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Fragment)