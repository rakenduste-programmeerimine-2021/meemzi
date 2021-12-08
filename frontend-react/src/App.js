import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddExercise from "./components/AddExercise.component";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/addExercise" component={AddExercise} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;