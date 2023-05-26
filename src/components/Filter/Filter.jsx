import React from 'react';

import { FilterInput } from './Filter.styled';

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <FilterInput
      type="text"
      value={value}
      onChange={(event) => onChangeFilter(event.target.value)}
      placeholder="Search contacts"
    />
  </div>
);

export default Filter;
