import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import MemePage from "./pages/MemePage";
import Registration from "./components/Registration";
import AccountPage from "./pages/AccountPage";
import AccountPageEdit from "./pages/AccountPageEdit";
import Meemzy from "./pages/Meemzy";
import MemeCreate from "./pages/MemeCreate";


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <div className="content">
        <div className="content-border">
          <Switch>
            <Route exact path="/" component={MemePage}/>
            <Route exact path="/memes" component={MemePage}/>
            <Route exact path="/create" component={MemeCreate}/>
            <Route exact path="/account" component={AccountPage}/>
            <Route exact path="/account/registration" component={Registration}/>
            <Route exact path="/account/edit" component={AccountPageEdit}/>
            <Route exact path="/meemzy" component={Meemzy}/>
          </Switch>
          <h1 className="footer"></h1>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
