import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import Layout from './pages/layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/contato" element={<ContactPage/>}  />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
