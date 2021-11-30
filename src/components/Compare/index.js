import React from 'react';
import Graph from '../Graph';
import Chart from '../Chart';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';

const Compare = () => {
  return (
    <div className="page page-compare">
      <img className="ellipse-blue" src={blueEllipse} />
      <img className="ellipse-green" src={greenEllipse} />
      <Graph />
      <Chart />
    </div>
  )
}

export default Compare
