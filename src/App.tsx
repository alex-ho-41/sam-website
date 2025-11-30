import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance" element={<Maintenance />} />
        {/* Redirect any unknown routes to Home or Maintenance as needed, for now let's keep it simple */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
