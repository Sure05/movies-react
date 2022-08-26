import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../routes/Home";
import Details from "../routes/Details";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/movies-react/">
            <Route index element={<Home />} />
            <Route path="/movies-react/:id" element={<Details />}>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
