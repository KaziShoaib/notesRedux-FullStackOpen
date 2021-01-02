import React from 'react';
import { changeFilter } from '../reducers/filterReducer';
import { useDispatch } from 'react-redux';


const VisibilityFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      all
      <input type='radio' name='filter' onChange={() => dispatch(changeFilter('ALL'))} />
      important
      <input type='radio' name='filter' onChange={() => dispatch(changeFilter('IMPORTANT'))} />
      nonimportant
      <input type='radio' name='filter' onChange={() => dispatch(changeFilter('NONIMPORTANT'))} />
    </div>
  );
};

export default VisibilityFilter;