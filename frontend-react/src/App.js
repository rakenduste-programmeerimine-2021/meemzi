import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddUser from "./components/AddUser"
import AddExercise from "./components/AddExercise";
import EditExercise from "./components/EditExercise";
import ExercisesList from "./components/ExercisesList";
import ExerciseTracker from "./components/ExerciseTracker";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/addExercise" component={AddExercise} />
        <Route exact path="/editExercise" component={EditExercise} />
        <Route exact path="/exerciseList" component={ExercisesList} />
        <Route exact path="/exerciseTracker" component={ExerciseTracker} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;