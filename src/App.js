import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from './home';
import Page from './page';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Page />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
