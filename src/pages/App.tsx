import { Route, Switch } from "wouter";
import Basico from "./Basico";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Basico />
        </Route>
        <Route path="/app" nest>
          <Switch>
            <Route path="/">
              <div>app</div>
            </Route>
            <Route path="/users" nest>
              <Switch>
                <Route path="/">
                  <div>users</div>
                </Route>
                <Route path="/:id" nest>
                  <Switch>
                    <Route path="/">
                      <div>user</div>
                    </Route>
                    <Route path="/orders">orders</Route>
                    <Route>
                      <div>no esiste esta pagina /app/users/0/*</div>
                    </Route>
                  </Switch>
                </Route>
                <Route>
                  <div>no esiste esta pagina /app/users/*</div>
                </Route>
              </Switch>
            </Route>
            <Route>
              <div>no esiste esta pagina /app/*</div>
            </Route>
          </Switch>
        </Route>
        <Route>
          <div>no existe</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
