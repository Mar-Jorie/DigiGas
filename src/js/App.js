import './css/App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cards from './card';
import User from './User';
import AddUser from './addUserpage';
import EditUser from './editUserpage';
import ProdPrice from './ProdPrice';
import AddProdPrice from './addProdprice';
import EditProdPrice from './editProdprice';
import Transact from './Transact';
import PofileSetting from './profSettings';


function App() {
  return (
    <Router basename='/DigiGas'>
      <div className='App'>
        <div className='headercontainer'>
          <Header />
        </div>
        <main className='content'>
          <Routes>
            <Route path="/" element={<Navigate to="/card" />} /> {/* Default route */}
            <Route path="card" element={<Cards />} />
            <Route path="user" element={<User />} />
            <Route path="addUserpage" element={<AddUser />} />
            <Route path="editUserpage" element={<EditUser />} />
            <Route path="ProdPrice" element={<ProdPrice />} />
            <Route path="addProdprice" element={<AddProdPrice />} />
            <Route path="editProdprice" element={<EditProdPrice />} />
            <Route path="Transact" element={<Transact />} />
            <Route path="profSettings" element={<PofileSetting />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
