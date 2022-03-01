import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import SearchPage from "./components/Search/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/search" element={<SearchPage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
