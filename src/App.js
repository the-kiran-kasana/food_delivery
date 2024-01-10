import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './SCREEN/HomePage';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import serverApp from './ServerSide/server'; // Adjust the import path

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
