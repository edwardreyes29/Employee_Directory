import React from 'react';
import Header from '../Header';

const Container = props => {
  return (
    <div className="container">{props.children}</div>
  )
}

export default Container;