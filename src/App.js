import "./App.css";
import Pagination from "./components/Pagination";
import { Route, Routes } from "react-router-dom";
import Page from "./components/Page";

function App() {

  return (


    <div className="App">
      <Routes>
        <Route path="/page" >
          <Route path=":pageId" element={<Page/>} />
        </Route>
      </Routes>
        <Pagination />
    </div>
  );
}

export default App;
