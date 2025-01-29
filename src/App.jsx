import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./components/Pages/HomePage";
import AboutUs from "./components/Pages/AboutUs";
import Events from "./components/Pages/Events";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/events' element={<Events />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
