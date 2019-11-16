import React from 'react';
import T from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { controls, button } from './Controls.module.css';

const Controls = ({ onPublication, index, length, step }) => (
  <section className={controls}>
    <button
      type="button"
      name="previous"
      className={button}
      onClick={onPublication}
      disabled={index === step}
    >
      Назад
    </button>
    <button
      type="button"
      name="next"
      className={button}
      onClick={onPublication}
      disabled={index === length}
    >
      Вперед
    </button>
  </section>
);

Controls.defaultProps = {
  index: 1,
};

Controls.propTypes = {
  onPublication: T.func.isRequired,
  index: T.number,
  length: T.number.isRequired,
  step: T.number.isRequired,
};

export default Controls;
