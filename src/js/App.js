import './css/App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cards from './card';
import User from './User';
import AddUser from './addUserpage';
import EditUser from './editUserpage';



function App() {
  return (
    <Router>
    <div className='App'>
      <div className='headercontainer'>
        <Header />
      </div>
      <main className='content'>
        <Routes>
          <Route path="/" element={<Navigate to='/card' />} /> {/* Default route */}
          <Route path="/card" element={<Cards />} />
          <Route path="/user" element={<User />} />
          <Route path="/addUserpage" element={<AddUser />} />
          <Route path="/editUserpage" element={<EditUser />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
