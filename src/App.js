import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Trycss from './components/Trycss';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-css" element={<Introduction />} />
        <Route path="learn-css-content" element = {<Portfolio />} />
        <Route path="BasicCSS" element = {<Trycss />} />
      </Routes>
    </Router>
  );
}

export default App;
