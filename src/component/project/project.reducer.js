const projectReducer = (state, action) => {
  switch(action.type) {
    case 'project_add':
      return [...state, {...action.payload}]
    case 'project_remove':
      return state.filter(project => project.id !== action.payload)
    default:
      return state;
  }
}

export {
  projectReducer
}