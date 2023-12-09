import './App.css';
import Header from './Header/header';
import LoginForm from './Header/login';
import ResetGlobalStyle from './ResetGlobal/resetGlobal';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contato from './Header/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResetGlobalStyle/>
          <Header/>
            <Routes>
              <Route path="/login" element={<LoginForm/>} />
              <Route path="/contato" element={<Contato/>} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;