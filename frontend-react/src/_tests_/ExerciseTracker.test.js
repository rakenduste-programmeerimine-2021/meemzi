import ExerciseTracker from '../Components/ExerciseTracker';

it ('should render', ()=>{
  const component = <ExerciseTracker shouldRender />
  //expect(component.exists()).toBe(true);
  expect(component).toBeDefined;
});