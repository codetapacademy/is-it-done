import React from 'react';

const Input = ({term, handleSearchTermChange}) => {
  // const handleSearchTermChange = e => {
  //   updateSearchTerm(e.target.value)
  // }
  return (
    <div>
      <div>{term}</div>
      <input value={term} onChange={handleSearchTermChange} />
    </div>
  )
}

export default Input