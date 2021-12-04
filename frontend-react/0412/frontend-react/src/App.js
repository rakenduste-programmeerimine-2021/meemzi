import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Hot from "./pages/Hot";
import Trending from "./pages/Trending";
import New from "./pages/New";
import AddMeme from "./pages/AddMeme";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/hot" component={Hot} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/new" component={New} />
        <Route exact path="/AddMeme" component={AddMeme} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;