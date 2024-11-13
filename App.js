//App.js
import Signup from './Signup';
import Login from './Login';
import Headers from './Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className ="container">
      <Router>

          <Routes>
            <Route path = "/" element ={<Headers />} />
            <Route path = "/login" element ={<Login />} />
            <Route path = "/signup" element ={<Signup />} />
          </Routes>
          

      </Router>
    </div>


  );
}

export default App;