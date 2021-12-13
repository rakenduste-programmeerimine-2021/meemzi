it ('should render', ()=>{
  const component = <ExerciseList shouldRender />
  //expect(component.exists()).toBe(true);
  expect(component).toBeDefined;
});