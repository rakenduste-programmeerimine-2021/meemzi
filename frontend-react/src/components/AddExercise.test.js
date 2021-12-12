//https://stackoverflow.com/questions/56827300/how-to-test-a-component-using-react-redux-hooks

it ('should render', ()=>{
  const component = <AddExercise shouldRender />
  //expect(component.exists()).toBe(true);
  expect(component).toBeDefined;
});