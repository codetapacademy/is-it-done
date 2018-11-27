import React, { useReducer, useRef } from 'react';
import { projectReducer } from './project.reducer';
import { shuffleValue, getId } from '../util';

const Project = () => {
  const initialState = [
    {name: "Intro into React for Total Beginners", id: getId()},
    {name: "Write JavaScript faster with ES6", id: getId()}
  ];
  const [projectList, dispatchProjectList] = useReducer(projectReducer, initialState);
  const projectName = useRef();

  const handleProjectRemove = payload => dispatchProjectList({type: 'project_remove', payload})

  const renderProjectList = () => {
    return projectList.map(project => (
      <div key={project.id}>
        <span>{project.name}</span>
        <button onClick={() => handleProjectRemove(project.id)}>&times;</button>
      </div>
    ))
  }

  const handleFormSubmit = e => {
    dispatchProjectList({type: 'project_add', payload: {
      name: projectName.current.value,
      id: getId()
    }});
    projectName.current.value = '';
    projectName.current.focus();
    e.preventDefault();
  }

  const renderAddProjectToList = () => {
    return (
      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={projectName} />
        <button type="submit">Add project</button>
      </form>
    );
  }

  return (<>
    {renderProjectList()}
    {renderAddProjectToList()}
  </>);
}

export default Project;
