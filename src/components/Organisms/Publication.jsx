import React from 'react';
import styled from 'styled-components';

const Publication = ({title, author, fecha, content}) => {
  return (
    <article className="publication s-border-top s-py-3">
      <div className="publication__container">
        <Titulo>
          {title}
        </Titulo>
        <span><b>{author}</b> a las {fecha}</span>
        <div className="publication__content">
          <p>{content}</p>
        </div>
      </div>
    </article>
  )
}

const Titulo = styled.h2`
  color: #282D31;
`;


export default Publication

