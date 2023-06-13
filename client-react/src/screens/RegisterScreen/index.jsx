import React from 'react';
import Actions from './actions';
import View from './view';

const Container = ({ ...props }) => {
  const actions = Actions();
  return <View {...props} {...actions} />;
};

export default Container;
