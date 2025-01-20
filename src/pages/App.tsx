import { Route, Switch } from "wouter";
import Basico from "./Basico";
import MiPerfil from "./MiPerfil";
import { Page } from "./Page";
import { PageLayout } from "../layout/PageLayout";
import { Producto } from "./Producto";
import { Productos } from "./Productos";

function App() {
  return (
    <>
      <Route path="/">
        <PageLayout>
          <Page />
        </PageLayout>
      </Route>
      <Route path="/basico">
        <PageLayout>
          <Basico />
        </PageLayout>
      </Route>
      <Route path="/perfil">
        <PageLayout>
          <MiPerfil />
        </PageLayout>
      </Route>
      <Route path="/productos">
        <PageLayout>
          <Productos />
        </PageLayout>
      </Route>
      <Route path="/productos/:id">
        {(params) => (
          <PageLayout>
            <Producto id={params.id} />
          </PageLayout>
        )}
      </Route>
    </>
  );
}

export default App;
