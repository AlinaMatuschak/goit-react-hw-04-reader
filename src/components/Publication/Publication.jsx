import React from 'react';
import T from 'prop-types';
import { publications } from './Publication.module.css';

const Publication = ({ publication: { title, text }, number }) => {
  return (
    <article className={publications}>
      <h2>
        {number}. {title}
      </h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  number: T.number.isRequired,
  publication: T.object.isRequired,
};

export default Publication;
