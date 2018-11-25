import React, { useState } from 'react';
import './App.css';
import Input from './component/input';
import NumberStepper from './component/number-stepper';

const IsItDone = ({}) => {
  const [repositoryList, setRepositoryList] = useState([]);
  const [term, setTerm] = useState('codetapio');
  const listIt = () => {
    fetch(`https://api.github.com/users/${term}/repos`)
      .then(r => r.json())
      .then((data) => {
        console.log(data)
        setRepositoryList(data);
      })
  }
  const renderRepositories = () => {
    return Array.isArray(repositoryList) && repositoryList.map(({name}) => (
      <pre>{name}</pre>
    ))
  }

  const handleSearchTermChange = e => setTerm(e.target.value)

  return (
    <div className="IsItDone">
      <h1>It works</h1>
      <Input term={term} handleSearchTermChange={handleSearchTermChange} />
      <button onClick={listIt}>List {term}'s repositories</button>
      <NumberStepper/>
      {renderRepositories()}
    </div>
  );
}

export default IsItDone;
