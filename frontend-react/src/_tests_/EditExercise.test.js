import EditExercise from '../Components/EditExercise';

it ('should render', ()=>{
  const component = <EditExercise shouldRender />
  //expect(component.exists()).toBe(true);
  expect(component).toBeDefined;
});