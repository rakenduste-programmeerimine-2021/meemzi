import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";
import Exercise from "./pages/addExercise";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/addExercise" component={Exercise} />
        <Route exact path="/user" component={User} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;