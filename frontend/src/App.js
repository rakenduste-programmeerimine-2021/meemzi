import Login from "./pages/Login";
import Register from "./pages/Register";
import {Browserrouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Browserrouter>
                    <Switch>
                        <Route exect path="login" component={Login}/>
                    </Switch>
                </Browserrouter>
            </header>
        </div>
    );
}

export default App;