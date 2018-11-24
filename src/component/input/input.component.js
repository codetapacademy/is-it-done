import React, { useState } from 'react';

const Input = ({term}) => {
  const [searchTerm, updateSearchTerm] = useState(term || 'asd');
  const handleSearchTermChange = e => {
    updateSearchTerm(e.target.value)
  }
  return (
    <div>
      <div>{searchTerm}</div>
      <input value={searchTerm} onChange={handleSearchTermChange} />
    </div>
  )
}

export default Input