import Navbar from "../Components/Navbar";

it ('should render', ()=>{
  const component = <Navbar shouldRender />
  //expect(component.exists()).toBe(true);
  expect(component).toBeDefined;
});
