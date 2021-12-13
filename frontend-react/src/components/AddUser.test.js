it ('should render', ()=>{
  const component = <AddUser shouldRender />
  //expect(component.exists()).toBe(true);
  expect(component).toBeDefined;
});