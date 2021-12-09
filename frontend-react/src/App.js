import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddUser from "./components/AddUser"
import AddExercise from "./components/AddExercise";
import EditExercise from "./components/EditExercise";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/addExercise" component={AddExercise} />
        <Route exact path="/editExercise" component={EditExercise} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;