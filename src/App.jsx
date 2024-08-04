import Header from "./components/Layouts/Header";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
